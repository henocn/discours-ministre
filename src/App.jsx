// App.jsx
import React, { useState, useEffect, useCallback } from "react";
import { SLIDES } from "./data/slides";

import SlideWrapper   from "./components/SlideWrapper";
import NavArrows      from "./components/NavArrows";
import ProgressDots   from "./components/ProgressDots";

import SlideIntro     from "./slides/SlideIntro";
import SlideKeyPoint  from "./slides/SlideKeyPoint";
import SlideVideo     from "./slides/SlideVideo";

// Mappe le type de slide vers son composant
function renderSlide(slide, keypointIndex) {
  switch (slide.type) {
    case "intro":
      return <SlideIntro />;
    case "keypoint":
      return <SlideKeyPoint slide={slide} index={keypointIndex} />;
    case "video":
      return <SlideVideo slide={slide} />;
    default:
      return null;
  }
}

export default function App() {
  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState("none"); // "left" | "right" | "none"

  const total = SLIDES.length;

  // ─── Navigation ────────────────────────────────────────────
  const goNext = useCallback(() => {
    if (current < total - 1) {
      setDirection("right");
      setCurrent((c) => c + 1);
    }
  }, [current, total]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection("left");
      setCurrent((c) => c - 1);
    }
  }, [current]);

  const goTo = useCallback((index) => {
    setDirection(index > current ? "right" : "left");
    setCurrent(index);
  }, [current]);

  // ─── Clavier ───────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // ─── Swipe tactile ─────────────────────────────────────────
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchEnd   = (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend",   onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  }, [goNext, goPrev]);

  // ─── Calcul de l'index des keypoints (pour le numéro affiché) ─
  let keypointIndex = 0;
  const keypointCounts = SLIDES.map((s) => {
    if (s.type === "keypoint") return ++keypointIndex;
    return 0;
  });

  const slide = SLIDES[current];

  return (
    <>
      {/* Fond particules global */}
      <div className="bg-particles" />

      {/* Slide active */}
      <SlideWrapper slideKey={current} direction={direction}>
        {renderSlide(slide, keypointCounts[current])}
      </SlideWrapper>

      {/* Navigation */}
      <NavArrows
        onPrev={goPrev}
        onNext={goNext}
        canPrev={current > 0}
        canNext={current < total - 1}
        current={current}
        total={total}
      />

      {/* Points de progression */}
      <ProgressDots
        total={total}
        current={current}
        onGoto={goTo}
      />
    </>
  );
}