"use client";

import { useEffect, useRef, useState } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
  Color4,
  ParticleSystem,
  Texture,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

const PartsScene = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsmobile] = useState()

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      alpha: true,
    });

    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0); // transparent

    const camera = new ArcRotateCamera("camera", Math.PI / 0.3, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    camera.inputs.remove(camera.inputs.attached.mousewheel);


    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    SceneLoader.ImportMeshAsync("", "/models/", "parts.glb", scene).then((result) => {
      const rocketMesh = result.meshes[0];
      rocketMesh.scaling = new Vector3(0.3, 0.2, 0.3);
      rocketMesh.position = new Vector3(0.1, -0.4, 0);
      camera.setTarget(rocketMesh);

    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);


  return (
    <canvas
      className="!focus:outline-none"
      ref={canvasRef}
      width={isMobile ? 300 : 500}
      height={400}
      style={{
        backgroundColor: "transparent",
        pointerEvents: "auto",
        touchAction: "none",

      }}
    />
  );
};

export default PartsScene;