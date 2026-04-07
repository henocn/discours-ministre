// slides/SlideKeyPoint.jsx
import React, { useEffect, useRef } from "react";
import "./SlideKeyPoint.css";

/**
 * SlideKeyPoint
 * Affiche un point clef du discours :
 *  - Grande icône
 *  - Chiffre clef animé (compteur)
 *  - Unité
 *  - Titre
 *  - Description courte
 */
export default function SlideKeyPoint({ slide, index }) {
  const { icon, chiffre, unite, titre, description, couleurAccent } = slide;
  const numRef = useRef(null);

  // ─── Compteur animé ───────────────────────────────────────
  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    // Extrait le nombre (retire les non-chiffres sauf virgule/point)
    const rawNum = parseFloat(chiffre.replace(/[^0-9.,]/g, "").replace(",", "."));
    if (isNaN(rawNum)) {
      el.textContent = chiffre;
      return;
    }

    const suffix  = chiffre.replace(/[0-9.,\s]/g, "");  // ex: "%", " milliards"
    const isFloat = chiffre.includes(",") || chiffre.includes(".");
    const duration = 1800; // ms
    const steps    = 60;
    const interval = duration / steps;
    let step = 0;

    el.textContent = "0" + suffix;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = rawNum * eased;

      if (isFloat) {
        el.textContent = current.toFixed(1) + suffix;
      } else if (current >= 1000) {
        el.textContent = Math.floor(current).toLocaleString("fr-FR") + suffix;
      } else {
        el.textContent = Math.floor(current) + suffix;
      }

      if (step >= steps) {
        clearInterval(timer);
        el.textContent = chiffre; // affiche la valeur exacte
      }
    }, interval);

    return () => clearInterval(timer);
  }, [chiffre]);

  return (
    <div className="keypoint" style={{ "--accent": couleurAccent }}>

      {/* ─── FOND DÉCO ─── */}
      <div className="keypoint__bg-ring keypoint__bg-ring--1" />
      <div className="keypoint__bg-ring keypoint__bg-ring--2" />
      <div className="keypoint__bg-glow" />

      {/* ─── INDEX ─── */}
      <span className="keypoint__index">
        {String(index).padStart(2, "0")}
      </span>

      {/* ─── CARTE CENTRALE ─── */}
      <div className="keypoint__card">

        {/* ICÔNE */}
        <div className="keypoint__icon-wrap">
          <span className="keypoint__icon" role="img" aria-label={titre}>{icon}</span>
        </div>

        {/* CHIFFRE */}
        <div className="keypoint__metric">
          <span className="keypoint__chiffre" ref={numRef}>{chiffre}</span>
          <span className="keypoint__unite">{unite}</span>
        </div>

        {/* SÉPARATEUR */}
        <div className="keypoint__sep" />

        {/* TITRE */}
        <h2 className="keypoint__titre">{titre}</h2>

        {/* DESCRIPTION */}
        <p className="keypoint__desc">{description}</p>

      </div>

      {/* ─── BANDE ACCENT BAS ─── */}
      <div className="keypoint__accent-bar" />

    </div>
  );
}