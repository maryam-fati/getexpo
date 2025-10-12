
'use client'
import React, { useRef, useEffect, useState } from 'react';
import {
    Engine,
    Scene,
    ArcRotateCamera,
    HemisphericLight,
    DirectionalLight,
    ShadowGenerator,
    StandardMaterial,
    Color3,
    Vector3,
    MeshBuilder,
    Mesh,
    Texture,
    Animation 
} from '@babylonjs/core';
import { MoveRight } from 'lucide-react';


const RealisticCustomerMachine = () => {
    const reactCanvas = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const engineRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        if (!reactCanvas.current) return;

        const engine = new Engine(reactCanvas.current, true, { preserveDrawingBuffer: true, stencil: true, alpha: true });
        engineRef.current = engine;

        const scene = new Scene(engine);

        sceneRef.current = scene;
        scene.clearColor = new Color3(0, 0, 0).toColor4(0); // Fully transparent background
        scene.ambientColor = new Color3(0.4, 0.4, 0.4);
        // --- Camera Setup ---
        const camera = new ArcRotateCamera("camera", Math.PI / 4, Math.PI / 2.5, 45, new Vector3(0, 5, 0), scene);
        // camera.attachControl(reactCanvas.current, true); 
        camera.setPosition(new Vector3(-23.431894900715342, 19.24134188275415, -35.68095406152058));
        camera.setTarget(new Vector3(0, 5, 0));
        camera.inertia = 0.8;
        camera.lowerRadiusLimit = 20;
        camera.upperRadiusLimit = 70;
        camera.lowerBetaLimit = 0.1;
        camera.upperBetaLimit = Math.PI - 0.1;

        // --- Lighting Setup ---
        const hemisphericLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
        hemisphericLight.intensity = 0.4;

        const mainLight = new DirectionalLight("mainLight", new Vector3(-0.5, -1, -0.3), scene);
        mainLight.position = new Vector3(20, 30, 15);
        mainLight.intensity = 1.2;

        const fillLight1 = new DirectionalLight("fillLight1", new Vector3(1, -0.5, -0.5), scene);
        fillLight1.position = new Vector3(-15, 10, 10);
        fillLight1.intensity = 0.3;

        const fillLight2 = new DirectionalLight("fillLight2", new Vector3(0, -0.5, 1), scene);
        fillLight2.position = new Vector3(0, 5, -20);
        fillLight2.intensity = 0.2;

        // --- Shadow Generator ---
        const shadowGenerator = new ShadowGenerator(1024, mainLight);
        shadowGenerator.useBlurExponentialShadowMap = true;
        shadowGenerator.blurKernel = 32;
        // Set up objects to receive shadows
        scene.meshes.forEach(mesh => {
            mesh.receiveShadows = true;
        });


        // --- Materials ---
        // Function to create a StandardMaterial that behaves like a PhongMaterial
        const createStandardPhongMaterial = (name, color, shininess, specularColor, texturePath = null) => {
            const material = new StandardMaterial(name, scene);
            material.diffuseColor = color;
            material.specularPower = shininess;
            material.specularColor = specularColor;
            if (texturePath) {
                material.diffuseTexture = new Texture(texturePath, scene);
            }
            return material;
        };

        // Function to create a StandardMaterial that behaves like an UnlitMaterial
        const createStandardBasicMaterial = (name, color, transparency = false, opacity = 1) => {
            const material = new StandardMaterial(name, scene);
            material.diffuseColor = color;
            material.specularColor = new Color3(0, 0, 0); // No specular highlights
            material.emissiveColor = color; // Make it emit its own color to appear unlit
            material.disableLighting = true; // This property effectively makes it unlit
            material.alpha = opacity;
            return material;
        };

        // --- Machine Components ---

        // Professional Conveyor Belt System
        const conveyorGroup = new Mesh("conveyorGroup", scene);

        const conveyorBaseMaterial = createStandardPhongMaterial("conveyorBaseMat", Color3.FromHexString("#607D8B"), 40, Color3.FromHexString("#CCCCCC"));
        const conveyorBase = MeshBuilder.CreateBox("conveyorBase", { width: 35, height: 1.2, depth: 5 }, scene);
        conveyorBase.position.y = 0.8;
        conveyorBase.material = conveyorBaseMaterial;
        shadowGenerator.addShadowCaster(conveyorBase);
        conveyorBase.receiveShadows = true;
        conveyorBase.parent = conveyorGroup;

        const beltMaterial = createStandardPhongMaterial("beltMat", Color3.FromHexString("#263238"), 10, new Color3(0, 0, 0));
        beltMaterial.alpha = 0.9;
        const belt = MeshBuilder.CreatePlane("belt", { width: 35, height: 5 }, scene);
        belt.rotation.x = Math.PI / 2;
        belt.position.y = 1.21;
        belt.material = beltMaterial;
        belt.parent = conveyorGroup;

        // Support legs
        const legMaterial = createStandardPhongMaterial("legMat", Color3.FromHexString("#455A64"), 0, new Color3(0, 0, 0));
        for (let i = -15; i <= 15; i += 10) {
            const leg = MeshBuilder.CreateCylinder("leg", { diameterTop: 0, diameterBottom: 0.8, height: 1.9 }, scene);
            leg.position.set(i, 0.6, 2);
            leg.material = legMaterial;
            shadowGenerator.addShadowCaster(leg);
            leg.parent = conveyorGroup;

            const leg2 = leg.clone("leg2");
            leg2.position.z = -2;
            leg2.parent = conveyorGroup;
        }


        // Side barriers
        const barrierMaterial = createStandardPhongMaterial("barrierMat", Color3.FromHexString("#B0BEC5"), 30, new Color3(0, 0, 0), "/textures/metal1.jpg");
        barrierMaterial.alpha = 0.95;
        const leftBarrier = MeshBuilder.CreateBox("leftBarrier", { width: 35, height: 0.6, depth: 0.3 }, scene);
        leftBarrier.position.set(0, 1, 2.65);
        leftBarrier.material = barrierMaterial;
        shadowGenerator.addShadowCaster(leftBarrier);
        leftBarrier.parent = conveyorGroup;

        const rightBarrier = leftBarrier.clone("rightBarrier");
        rightBarrier.position.z = -2.65;
        rightBarrier.parent = conveyorGroup;

        // Professional X-Ray Scanner Machine - Enhanced Details
        const scannerGroup = new Mesh("scannerGroup", scene);

        const mainBodyColor = Color3.FromHexString("#FAFAFA");
        const accentColor = Color3.FromHexString("#78909C"); // Metallic grey for accents
        const darkPanelColor = Color3.FromHexString("#263238"); // Darker color for inset panels

        // Main scanner top body
        const scannerTop = MeshBuilder.CreateBox("scannerTop", { width: 10, height: 3, depth: 7 }, scene);
        scannerTop.position.y = 7.7;
        scannerTop.material = createStandardPhongMaterial("scannerTopMat", mainBodyColor, 80, Color3.FromHexString("#FFFFFF"), "/textures/metal1.jpg");
        shadowGenerator.addShadowCaster(scannerTop);
        scannerTop.receiveShadows = true;
        scannerTop.parent = scannerGroup;

        // Main scanner base body
        const scannerBase = MeshBuilder.CreateBox("scannerBase", { width: 10, height: 5, depth: 7 }, scene);
        scannerBase.position.y = 3.8;
        scannerBase.material = createStandardPhongMaterial("scannerBaseMat", mainBodyColor, 80, Color3.FromHexString("#FFFFFF"), "/textures/metal1.jpg");
        shadowGenerator.addShadowCaster(scannerBase);
        scannerBase.receiveShadows = true;
        scannerBase.parent = scannerGroup;

        // Scanner input/output arch (more defined tunnel entry/exit)
        const archThickness = 0.8;
        const archHeight = 5;
        const archInnerWidth = 5.5;
        const archOuterWidth = archInnerWidth + 2 * archThickness;

        const frontArch = MeshBuilder.CreateBox("frontArch", { width: archThickness, height: archHeight, depth: archOuterWidth }, scene);
        frontArch.position.set(-5 + archThickness / 2, 4.5, 0);
        frontArch.material = createStandardPhongMaterial("archMat", accentColor, 60, Color3.FromHexString("#DDDDDD"), "/textures/metal1.jpg");
        shadowGenerator.addShadowCaster(frontArch);
        frontArch.parent = scannerGroup;

        const backArch = frontArch.clone("backArch");
        backArch.position.x = 5 - archThickness / 2;
        backArch.parent = scannerGroup;

        // Tunnel opening - deep dark for depth
        const tunnelMaterial = createStandardBasicMaterial("tunnelMat", Color3.FromHexString("#0A0A0A"));
        const tunnel = MeshBuilder.CreateBox("tunnel", { width: 10.2, height: 5, depth: 5.5 }, scene);
        tunnel.position.y = 4.5;
        tunnel.material = tunnelMaterial;
        tunnel.parent = scannerGroup;

        // X-Ray lead curtains - dark and transparent, slightly more opacity
        const curtainMaterial = createStandardPhongMaterial("curtainMat", Color3.FromHexString("#424242"), 0, new Color3(0, 0, 0));
        curtainMaterial.alpha = 0.85;
        curtainMaterial.backFaceCulling = false;
        for (let i = 0; i < 6; i++) {
            const entranceStrip = MeshBuilder.CreatePlane("entranceStrip" + i, { width: 0.8, height: 4 }, scene);
            entranceStrip.position.set(-5, 4.5, -2.5 + i * 0.8);
            entranceStrip.rotation.y = Math.PI / 2;
            entranceStrip.material = curtainMaterial;
            entranceStrip.parent = scannerGroup;

            const exitStrip = MeshBuilder.CreatePlane("exitStrip" + i, { width: 0.8, height: 4 }, scene);
            exitStrip.position.set(5, 4.5, -2.5 + i * 0.8);
            exitStrip.rotation.y = Math.PI / 2;
            exitStrip.material = curtainMaterial;
            exitStrip.parent = scannerGroup;
        }


        // Monitor screen with X-ray display
        // const screenMaterial = createStandardBasicMaterial("screenMat", Color3.FromHexString("#0088FF"));
        // screenMaterial.alpha = 0.95;
        // screenMaterial.emissiveColor = Color3.FromHexString("#004488");
        // const screen = MeshBuilder.CreatePlane("screen", { width: 2.2, height: 1.7 }, scene);
        // screen.position.set(-8, 4.5, 6);
        // screen.material = screenMaterial;
        // screen.parent = scannerGroup;

        // X-ray scan lines on screen
        // const scanLineMaterial = createStandardBasicMaterial("scanLineMat", Color3.FromHexString("#00FF88"));
        // scanLineMaterial.alpha = 0.9;
        // scanLineMaterial.emissiveColor = Color3.FromHexString("#00CC66");
        // const scanLine = MeshBuilder.CreatePlane("scanLine", { width: 2.2, height: 0.05 }, scene);
        // scanLine.position.set(-8, 5.5, 6.17); // Raised height for better visibility
        // scanLine.material = scanLineMaterial;
        // scanLine.parent = scannerGroup;

        // New: Scanning beam inside the tunnel
        const scanningBeamMaterial = createStandardBasicMaterial("scanningBeamMat", Color3.FromHexString("#00FFFF"), true, 0.7); // Cyan color for X-ray
        scanningBeamMaterial.emissiveColor = Color3.FromHexString("#00BBBB"); // Stronger glow
        const scanningBeam = MeshBuilder.CreateBox("scanningBeam", { width: 0.2, height: 4, depth: 5 }, scene);
        scanningBeam.material = scanningBeamMaterial;
        scanningBeam.position.set(0, 4.5, 0);
        scanningBeam.parent = scannerGroup;
        scanningBeam.setEnabled(false); // Start hidden


        // Warning lights array
        const lightPositions = [
            [-2, 9.5, 0], [0, 9.5, 0], [2, 9.5, 0]
        ];
        const warningLights = [];
        const redLightEmissive = Color3.FromHexString("#660000");
        const amberLightEmissive = Color3.FromHexString("#663300");

        lightPositions.forEach((pos, index) => {
            const light = MeshBuilder.CreateCylinder("warningLight" + index, { diameter: 0.8, height: 0.6 }, scene);
            light.position.set(...pos);
            const lightMaterial = createStandardPhongMaterial("lightMat" + index,
                index === 1 ? Color3.FromHexString("#FF4444") : Color3.FromHexString("#FF8800"),
                100, new Color3(0, 0, 0));
            lightMaterial.emissiveColor = index === 1 ? redLightEmissive : amberLightEmissive;
            light.material = lightMaterial;
            shadowGenerator.addShadowCaster(light);
            light.parent = scannerGroup;
            warningLights.push(light);
        });

        // Realistic Operator
        const createRealisticOperator = () => {
            const operatorGroup = new Mesh("operatorGroup", scene);

            const headMaterial = createStandardPhongMaterial("headMat", Color3.FromHexString("#FFDBAC"), 0, new Color3(0, 0, 0));
            const head = MeshBuilder.CreateSphere("head", { diameter: 1.2 }, scene);
            head.position.y = 7;
            head.material = headMaterial;
            shadowGenerator.addShadowCaster(head);
            head.parent = operatorGroup;

            const hairMaterial = createStandardPhongMaterial("hairMat", Color3.FromHexString("#4A4A4A"), 0, new Color3(0, 0, 0));
            const hair = MeshBuilder.CreateSphere("hair", { diameter: 1.24 }, scene);
            hair.position.y = 7.2;
            hair.scaling.set(1, 0.7, 1);
            hair.material = hairMaterial;
            hair.parent = operatorGroup;

            const bodyMaterial = createStandardPhongMaterial("bodyMat", Color3.FromHexString("#007BFF"), 20, new Color3(0, 0, 0));
            const body = MeshBuilder.CreateCylinder("body", { diameterTop: 2, diameterBottom: 2.4, height: 3.5 }, scene);
            body.position.y = 4.5;
            body.material = bodyMaterial;
            shadowGenerator.addShadowCaster(body);
            body.parent = operatorGroup;

            const armMaterial = createStandardPhongMaterial("armMat", Color3.FromHexString("#FFDBAC"), 0, new Color3(0, 0, 0));
            const leftArm = MeshBuilder.CreateCylinder("leftArm", { diameter: 0.5, height: 2.5 }, scene);
            leftArm.position.set(-1.4, 5, 0);
            leftArm.rotation.z = Math.PI / 4;
            leftArm.material = armMaterial;
            shadowGenerator.addShadowCaster(leftArm);
            leftArm.parent = operatorGroup;

            const rightArm = MeshBuilder.CreateCylinder("rightArm", { diameter: 0.5, height: 2.5 }, scene);
            rightArm.position.set(1.4, 5, 0);
            rightArm.rotation.z = -Math.PI / 4;
            rightArm.material = armMaterial;
            shadowGenerator.addShadowCaster(rightArm);
            rightArm.parent = operatorGroup;

            const legMaterial = createStandardPhongMaterial("legMat", Color3.FromHexString("#263238"), 0, new Color3(0, 0, 0));
            const leftLeg = MeshBuilder.CreateCylinder("leftLeg", { diameterTop: 0.6, diameterBottom: 0.7, height: 3 }, scene);
            leftLeg.position.set(-0.5, 1.5, 0);
            leftLeg.material = legMaterial;
            shadowGenerator.addShadowCaster(leftLeg);
            leftLeg.parent = operatorGroup;

            const rightLeg = MeshBuilder.CreateCylinder("rightLeg", { diameterTop: 0.6, diameterBottom: 0.7, height: 3 }, scene);
            rightLeg.position.set(0.5, 1.5, 0);
            rightLeg.material = legMaterial;
            shadowGenerator.addShadowCaster(rightLeg);
            rightLeg.parent = operatorGroup;

            return operatorGroup;
        };

        // Realistic Money Bundles
        const createRealisticMoney = () => {
            const moneyGroup = new Mesh("moneyGroup", scene);

            const bundleWidth = 1.2;
            const bundleHeight = 0.6;
            const bundleDepth = 2;
            const numBills = 50; // Increased bills for denser stack
            const billThickness = bundleHeight / numBills;

            // Materials for bills (slightly different shades of green, resembling dollar bills)
            const billMaterial1 = createStandardPhongMaterial("billMat1", new Color3(0.72, 0.77, 0.67), 5, new Color3(0.2, 0.2, 0.2)); // Soft green-gray
            const billMaterial2 = createStandardPhongMaterial("billMat2", new Color3(0.65, 0.7, 0.6), 5, new Color3(0.2, 0.2, 0.2)); // Slightly deeper tone

            const dollarTexture = new StandardMaterial("dollarTextureMat", scene);
            dollarTexture.diffuseTexture = new Texture("textures/dollor.jpeg", scene);
            // dollarTexture.diffuseTexture.uScale = 1;
            // dollarTexture.diffuseTexture.vScale = 1;
            dollarTexture.specularColor = new Color3(0, 0, 0);
            dollarTexture.backFaceCulling = false;

            // Create individual bill meshes with slight random variations
            for (let i = 0; i < numBills; i++) {
                const bill = MeshBuilder.CreateBox("bill" + i, { width: bundleWidth * 0.98, height: billThickness, depth: bundleDepth * 0.98 }, scene);
                bill.position.y = (i * billThickness) - (bundleHeight / 2) + (billThickness / 2);
                // bill.material = i % 2 === 0 ? billMaterial1 : billMaterial2; // Alternate colors
                // bill.parent = moneyGroup;
                if (i === 0 || i === numBills - 1) {
                    bill.material = dollarTexture; // Apply to top AND bottom bill
                } else {
                    bill.material = i % 2 === 0 ? billMaterial1 : billMaterial2;
                }
                bill.parent = moneyGroup;
                bill.rotation.y = (Math.random() - 0.5) * 0.05; // Small random yaw
                bill.rotation.z = (Math.random() - 0.5) * 0.02; // Very small random roll
                bill.position.x += (Math.random() - 0.5) * 0.02; // Small random x offset
                bill.position.z += (Math.random() - 0.5) * 0.02; // Small random z offset
            }

            // Main bundle shape (invisible, just for sizing and shadow casting for the stack)
            const bundleBase = MeshBuilder.CreateBox("bundleBase", { width: bundleWidth, height: bundleHeight, depth: bundleDepth }, scene);
            bundleBase.material = createStandardBasicMaterial("bundleBaseMat", new Color3(0, 0, 0), false, 0); // Fully transparent
            bundleBase.parent = moneyGroup;
            shadowGenerator.addShadowCaster(bundleBase); // Cast shadow for the whole stack


            return moneyGroup;
        };

        // Realistic Customers
        const createRealisticCustomer = (color) => {
            const customerGroup = new Mesh("customerGroup", scene);
            const scale = 0.8;

            const headMaterial = createStandardPhongMaterial("custHeadMat", Color3.FromHexString("#FFDBAC"), 0, new Color3(0, 0, 0));
            const head = MeshBuilder.CreateSphere("custHead", { diameter: 1 * scale }, scene);
            head.position.y = 6 * scale;
            head.material = headMaterial;
            shadowGenerator.addShadowCaster(head);
            head.parent = customerGroup;

            const hairColors = [
                Color3.FromHexString("#8B4513"), Color3.FromHexString("#654321"),
                Color3.FromHexString("#2F1B14"), Color3.FromHexString("#FFD700"),
                Color3.FromHexString("#9E9E9E"), Color3.FromHexString("#000000"),
                Color3.FromHexString("#FFFFFF")
            ];
            const hairMaterial = createStandardPhongMaterial("custHairMat", hairColors[Math.floor(Math.random() * hairColors.length)], 0, new Color3(0, 0, 0));
            const hair = MeshBuilder.CreateSphere("hair", { diameter: 1.04 * scale }, scene);
            hair.position.y = 6.2 * scale;
            hair.scaling.set(1, 0.8, 1);
            hair.material = hairMaterial;
            hair.parent = customerGroup;

            const bodyMaterial = createStandardPhongMaterial("custBodyMat", color, 0, new Color3(0, 0, 0));
            const body = MeshBuilder.CreateCylinder("custBody", { diameterTop: 1.6 * scale, diameterBottom: 2 * scale, height: 2.5 * scale }, scene);
            body.position.y = 4 * scale;
            body.material = bodyMaterial;
            shadowGenerator.addShadowCaster(body);
            body.parent = customerGroup;

            const armMaterial = createStandardPhongMaterial("custArmMat", Color3.FromHexString("#FFDBAC"), 0, new Color3(0, 0, 0));
            const leftArm = MeshBuilder.CreateCylinder("custLeftArm", { diameter: 0.4 * scale, height: 2 * scale }, scene);
            leftArm.position.set(-1.1 * scale, 4.2 * scale, 0);
            leftArm.rotation.z = Math.PI / 6;
            leftArm.material = armMaterial;
            shadowGenerator.addShadowCaster(leftArm);
            leftArm.parent = customerGroup;

            const rightArm = MeshBuilder.CreateCylinder("custRightArm", { diameter: 0.4 * scale, height: 2 * scale }, scene);
            rightArm.position.set(1.1 * scale, 4.2 * scale, 0);
            rightArm.rotation.z = -Math.PI / 6;
            rightArm.material = armMaterial;
            shadowGenerator.addShadowCaster(rightArm);
            rightArm.parent = customerGroup;

            const legMaterial = createStandardPhongMaterial("custLegMat", Color3.FromHexString("#2C3E50"), 0, new Color3(0, 0, 0));
            const leftLeg = MeshBuilder.CreateCylinder("custLeftLeg", { diameterTop: 0.5 * scale, diameterBottom: 0.6 * scale, height: 2.5 * scale }, scene);
            leftLeg.position.set(-0.4 * scale, 1.5 * scale, 0);
            leftLeg.material = legMaterial;
            shadowGenerator.addShadowCaster(leftLeg);
            leftLeg.parent = customerGroup;

            const rightLeg = MeshBuilder.CreateCylinder("custRightLeg", { diameterTop: 0.5 * scale, diameterBottom: 0.6 * scale, height: 2.5 * scale }, scene);
            rightLeg.position.set(0.4 * scale, 1.5 * scale, 0);
            rightLeg.material = legMaterial;
            shadowGenerator.addShadowCaster(rightLeg);
            rightLeg.parent = customerGroup;

            const bagMaterial = createStandardPhongMaterial("custBagMat", Color3.FromHexString("#8B4513"), 0, new Color3(0, 0, 0));
            const bag = MeshBuilder.CreateBox("custBag", { width: 0.6 * scale, height: 0.8 * scale, depth: 0.4 * scale }, scene);
            bag.position.set(0.8 * scale, 3 * scale, 0);
            bag.material = bagMaterial;
            shadowGenerator.addShadowCaster(bag);
            bag.parent = customerGroup;

            return customerGroup;
        };

        const operator = createRealisticOperator();
        operator.position.set(-15, 0, 0);
        shadowGenerator.addShadowCaster(operator);

        const moneyBundles = [];
        for (let i = 0; i < 8; i++) {
            const money = createRealisticMoney();
            money.position.set(-12 + Math.random() * 4, 3 + Math.random() * 2, Math.random() * 3 - 1.5);
            //   money.rotation.set(Math.random() * 0.3, Math.random() * Math.PI, Math.random() * 0.3);
            money.setEnabled(false);
            money.metadata = {
                originalPosition: money.position.clone(),
                walkingAway: false,
                walkProgress: 0,
                customerGenerated: false
            };
            moneyBundles.push(money);
            shadowGenerator.addShadowCaster(money);
        }

        const customers = [];
        const customerColors = [
            Color3.FromHexString("#9C27B0"), Color3.FromHexString("#00BCD4"),
            Color3.FromHexString("#FF5722"), Color3.FromHexString("#2196F3"),
            Color3.FromHexString("#E91E63"), Color3.FromHexString("#795548"),
            Color3.FromHexString("#8BC34A"), Color3.FromHexString("#FFC107")
        ];

        let time = 0;
        const animationSpeed = 0.025;

        // Render loop
        engine.runRenderLoop(() => {
            time += animationSpeed;

            // Operator animations
            operator.position.y = Math.sin(time * 2) * 0.08;
            const operatorChildren = operator.getChildren();
            if (operatorChildren[3]) (operatorChildren[3]).rotation.z = Math.PI / 4 + Math.sin(time * 3) * 0.3; // Left arm
            if (operatorChildren[4]) (operatorChildren[4]).rotation.z = -Math.PI / 4 + Math.sin(time * 2.5) * 0.2; // Right arm

            // Money flow and customer generation
            const bundleCycle = time * 1.2;
            moneyBundles.forEach((bundle, index) => {
                const offset = index * 0.6;
                const bundleTime = (bundleCycle + offset) % (Math.PI * 3);

                if (bundleTime < Math.PI * 2) {
                    bundle.setEnabled(true);
                    const progress = bundleTime / (Math.PI * 2);
                    bundle.position.x = -12 + progress * 15;
                    bundle.position.y = 2 + Math.sin(bundleTime * 3) * 0.5;
                    bundle.rotation.y += 0.03;
                    bundle.rotation.z += 0.02;

                    // Special effects when money is inside the scanner tunnel
                    if (bundle.position.x > -5 && bundle.position.x < 5) {
                        const scanEffect = Math.sin(bundleTime * 15) * 0.3 + 1; // Pulsating effect
                        bundle.scaling.set(scanEffect, scanEffect, scanEffect);
                        scanningBeam.setEnabled(true); // Show scanning beam
                        scanningBeam.position.x = bundle.position.x; // Beam follows bundle
                        // Enhanced scanning beam animation: pulsing width and more vibrant color shift
                        scanningBeam.scaling.z = 0.5 + Math.sin(bundleTime * 30) * 0.5; // More pronounced pulse depth/width
                        scanningBeam.material.alpha = Math.sin(bundleTime * 20) * 0.3 + 0.5; // Pulsating opacity
                        scanningBeam.material.emissiveColor = Color3.Lerp(
                            Color3.FromHexString("#00BBBB"), // Base cyan
                            Color3.FromHexString("#00EEFF"), // Brighter cyan
                            Math.abs(Math.sin(bundleTime * 40)) // Fast pulse for color
                        );
                        // Jiggle scanner body when active
                        const jiggleAmount = 0.01;
                        scannerGroup.position.x = Math.sin(time * 50) * jiggleAmount;
                        scannerGroup.position.z = Math.cos(time * 45) * jiggleAmount;
                    } else {
                        bundle.scaling.set(1, 1, 1); // Reset scale when outside scanner
                        scanningBeam.setEnabled(false); // Hide scanning beam
                        // Reset scanner position when not active
                        scannerGroup.position.x = 0;
                        scannerGroup.position.z = 0;
                    }


                    // Generate customer when money exits the scanner
                    if (bundle.position.x > 1 && !bundle.metadata.customerGenerated) {
                        bundle.metadata.customerGenerated = true;

                        // Money "pop" effect when customer is generated
                        const popAnimation = new Animation("moneyPopAnimation", "scaling", 60, Animation.ANIMATIONTYPE_VECTOR3, Animation.ANIMATIONLOOPMODE_CONSTANT);
                        const keys = [];
                        const currentScale = bundle.scaling.clone();
                        const popFactor = 1.05; // Scale up by 10%
                        const popDurationFrames = 20;

                        keys.push({ frame: 0, value: currentScale });
                        keys.push({ frame: popDurationFrames / 2, value: currentScale.scale(popFactor) });
                        keys.push({ frame: popDurationFrames, value: currentScale });

                        popAnimation.setKeys(keys);
                        bundle.animations = [];
                        bundle.animations.push(popAnimation);

                        scene.beginAnimation(bundle, 0, popDurationFrames, false, 1, () => {
                            bundle.setEnabled(false); // Disable after pop animation finishes
                            bundle.scaling.set(1, 1, 1); // Reset scale explicitly for next cycle
                        });

                        const customer = createRealisticCustomer(customerColors[customers.length % customerColors.length]);
                        customer.position.set(4.5, 0, Math.random() * 6 - 3);
                        customer.scaling.set(0, 0, 0);
                        customer.metadata = {
                            spawnTime: time,
                            walkDirection: new Vector3(
                                1 + Math.random() * 0.5,
                                0,
                                (Math.random() - 0.5) * 0.3
                            ).normalize(),
                            walkSpeed: 0.1 + Math.random() * 0.05,
                            isWalking: false
                        };
                        customers.push(customer);
                        shadowGenerator.addShadowCaster(customer);
                    }
                } else {
                    // If bundle time has completed its cycle and no customer was generated, disable it
                    if (bundle.isEnabled()) { // Only disable if it's still enabled (not handled by pop animation)
                        bundle.setEnabled(false);
                        bundle.scaling.set(1, 1, 1); // Reset scale
                    }
                    bundle.metadata.customerGenerated = false; // Reset flag for next cycle
                }
            });

            // Customer emergence and walking animations
            customers.forEach((customer, index) => {
                const spawnAge = time - customer.metadata.spawnTime;
                const customerChildren = customer.getChildren();

                if (spawnAge < 2) {
                    const spawnProgress = Math.min(spawnAge / 2, 1);
                    const scale = Math.sin(spawnProgress * Math.PI) * 1.2;
                    customer.scaling.set(scale, scale, scale);
                    customer.position.y = (1 - spawnProgress) * -3;
                    customer.rotation.y = spawnProgress * Math.PI * 2;
                } else {
                    customer.scaling.set(1, 1, 1);
                    customer.position.y = 0;
                    customer.metadata.isWalking = true;

                    const walkVector = customer.metadata.walkDirection.clone();
                    walkVector.scaleInPlace(customer.metadata.walkSpeed);
                    customer.position.addInPlace(walkVector);

                    const walkCycle = spawnAge * 8;
                    if (customerChildren[5]) (customerChildren[5]).rotation.x = Math.sin(walkCycle) * 0.5; // Left leg
                    if (customerChildren[6]) (customerChildren[6]).rotation.x = Math.sin(walkCycle + Math.PI) * 0.5; // Right leg
                    if (customerChildren[3]) (customerChildren[3]).rotation.z = Math.PI / 6 + Math.sin(walkCycle + Math.PI) * 0.3; // Left arm
                    if (customerChildren[4]) (customerChildren[4]).rotation.z = -Math.PI / 6 + Math.sin(walkCycle) * 0.3; // Right arm

                    if (customer.position.length() > 50) {
                        customer.dispose();
                        customers.splice(index, 1);
                    }
                }
            });

            // Scanner effects
            warningLights.forEach((light, index) => {
                const lightCycle = time * 4 + index * 0.5;
                const intensity = Math.sin(lightCycle) > 0 ? 0.8 : 0.1;
                light.material.emissiveColor = index === 1 ?
                    (intensity > 0.5 ? redLightEmissive : Color3.FromHexString("#220000")) :
                    (intensity > 0.5 ? amberLightEmissive : Color3.FromHexString("#221100"));
            });

            // scanLine.position.y = 5.5 + Math.sin(time * 6) * 1.5; // Higher position and more movement
            // (screen.material).alpha = 0.95 + Math.sin(time * 8) * 0.05;

            // rollers.forEach((roller) => {
            //   roller.rotation.x += 0.08;
            // });

            scene.render();
        });

        // Resize event listener
        const onResize = () => {
            engine.resize();
        };
        window.addEventListener("resize", onResize);

        // Initial loading state transition
        setIsLoading(false);

        // Cleanup
        return () => {
            engine.dispose();
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div className="w-full  min-h-screen xl:h-[70vh] focus:outline-none relative overflow-hidden" style={{ background: 'transparent' }}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    </div>
                </div>
            )}
            <div className='absolute top-[1%] left-[50%] container mx-auto translate-x-[-50%]  py-16 bg-[#0c0c0c]   w-full '
                style={{
                    background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), /* Indigo glow bottom-left */
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), /* Pink glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
                    // Ensure the background covers the entire div
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute left-0  z-[100] top-0 h-full w-[15%] bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none "></div>
                <div className="absolute right-0 z-[100] top-0 h-full w-[15%] bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none "></div>

                <div className=''>

                    <div className='flex font-raleway uppercase text-gray-100 items-center justify-around'>

                        <h1 className='text-lg md:text-5xl font-medium '>AdSpend</h1>
                        
                        <h2 className='text-lg md:text-5xl font-medium'>Customers</h2>
                    </div>
                </div>

            </div>
            <canvas
                className="w-full h-full focus:outline-none bg-transparent"
                style={{ minHeight: '500px', touchAction: 'none' }}
                ref={reactCanvas}
            />
        </div>
    );
};

export default RealisticCustomerMachine;
