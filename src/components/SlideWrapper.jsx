// components/SlideWrapper.jsx
import React, { useEffect, useRef, useState } from "react";
import "./SlideWrapper.css";

/**
 * SlideWrapper
 * Conteneur 100vh pour chaque slide.
 * Gère la transition animée entrante (direction: "left" | "right" | "none").
 */
export default function SlideWrapper({ children, slideKey, direction }) {
  const [animClass, setAnimClass] = useState("slide--enter-" + direction);

  useEffect(() => {
    // Déclenche l'animation à chaque changement de slide
    setAnimClass("slide--enter-" + direction);
    const t = setTimeout(() => setAnimClass("slide--visible"), 30);
    return () => clearTimeout(t);
  }, [slideKey, direction]);

  return (
    <div className={`slide-wrapper ${animClass}`}>
      {children}
    </div>
  );
}