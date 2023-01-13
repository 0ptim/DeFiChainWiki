import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

export const BackgroundAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#FC1DAE",
          color2: "#00F6FF",
          colorMode: "lerpGradient",
          birdSize: 0.9,
          quantity: 3,
          separation: 100,
          backgroundAlpha: 0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div className={styles.animationOverlay} ref={vantaRef}></div>;
};
