// components/ProgressDots.jsx
import React from "react";
import "./ProgressDots.css";

export default function ProgressDots({ total, current, onGoto }) {
  return (
    <div className="progress-dots" role="tablist" aria-label="Navigation slides">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`progress-dot ${i === current ? "progress-dot--active" : ""}`}
          onClick={() => onGoto(i)}
          role="tab"
          aria-selected={i === current}
          aria-label={`Aller à la slide ${i + 1}`}
        />
      ))}
    </div>
  );
}