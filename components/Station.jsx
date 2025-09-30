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

const Station = () => {
  const [isMobile, setIsmobile] = useState()
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      alpha: true,
    });

    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 1); // transparent

    const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 3, new Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, false);
    // camera.setTarget(new Vector3(0, 5, 0));
    camera.inputs.remove(camera.inputs.attached.mousewheel);


    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    SceneLoader.ImportMeshAsync("", "/models/", "station2.glb", scene).then((result) => {
      const rocketMesh = result.meshes[0];
      rocketMesh.scaling = new Vector3(0.35, 0.35, 0.35);
      rocketMesh.position = new Vector3(0, 0, 0);
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
  // useEffect(()=>{
  //   const isMobile = window.innerWidth <= 768;
  //   setIsmobile(isMobile)

  // },[window.innerWidth])

  return (
    <canvas
      className="!focus:outline-none"
      ref={canvasRef}
      width={isMobile ? 300 : 500}
      height={500}
      style={{
        // backgroundColor: "transparent",
        pointerEvents: "auto",
        touchAction: "none",

      }}
    />
  );
};

export default Station;