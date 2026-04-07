// components/NavArrows.jsx
import React from "react";
import "./NavArrows.css";

export default function NavArrows({ onPrev, onNext, canPrev, canNext, current, total }) {
  return (
    <>
      {/* ─── FLÈCHE GAUCHE ─── */}
      <button
        className={`nav-arrow nav-arrow--left ${!canPrev ? "nav-arrow--hidden" : ""}`}
        onClick={onPrev}
        aria-label="Slide précédente"
        disabled={!canPrev}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* ─── FLÈCHE DROITE ─── */}
      <button
        className={`nav-arrow nav-arrow--right ${!canNext ? "nav-arrow--hidden" : ""}`}
        onClick={onNext}
        aria-label="Slide suivante"
        disabled={!canNext}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ─── COMPTEUR ─── */}
      <div className="nav-counter">
        <span className="nav-counter__current">{String(current + 1).padStart(2, "0")}</span>
        <span className="nav-counter__sep">/</span>
        <span className="nav-counter__total">{String(total).padStart(2, "0")}</span>
      </div>
    </>
  );
}