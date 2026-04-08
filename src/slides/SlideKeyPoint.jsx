// slides/SlideKeyPoint.jsx
import React, { useEffect, useRef } from "react";
import * as LucideIcons from "lucide-react";
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
  const { icon, chiffre, suffixe, unite, titre, description, couleurAccent, type } = slide;
  const numRef = useRef(null);
  const hasMetric = chiffre != null && chiffre !== "";

  // ─── Compteur statique (sans animation) ───────────────────
  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    el.textContent = chiffre;
  }, [chiffre]);

  return (
    <div className="keypoint" style={{ "--accent": couleurAccent }}>
      <div className="togo-stripe intro__stripe-top">
        <span /><span /><span /><span /><span />
      </div>

      {/* ─── FOND DÉCO ─── */}
      <div className="keypoint__bg-ring keypoint__bg-ring--1" />
      <div className="keypoint__bg-ring keypoint__bg-ring--2" />
      <div className="keypoint__bg-glow" />

      {/* ─── INDEX (uniquement pour keypoint) ─── */}
      {index > 0 && type !== 'content' && (
        <span className="keypoint__index">
          {String(index).padStart(2, "0")}
        </span>
      )}

      {/* ─── CARTE CENTRALE ─── */}
      <div className={`keypoint__card ${type === 'content' ? 'keypoint__card--content' : ''}`}>

        {/* ICÔNE LUCIDE (conditionnel) */}
        {type !== 'content' && icon && (
          <div className="keypoint__icon-wrap">
            {LucideIcons[icon] ? React.createElement(LucideIcons[icon], { 
              className: "keypoint__icon",
              size: 32,
              strokeWidth: 1.5
            }) : <span className="keypoint__icon-fallback">{icon}</span>}
          </div>
        )}

        {/* CHIFFRE (conditionnel) */}
        {hasMetric && type !== 'content' && (
          <div className="keypoint__metric">
            <span className="keypoint__chiffre" ref={numRef}>{chiffre}</span>
            {suffixe && <span className="keypoint__suffixe">{suffixe}</span>}
            <span className="keypoint__unite">{unite}</span>
          </div>
        )}

        {/* SÉPARATEUR */}
        <div className="keypoint__sep" />

        {/* TITRE */}
        <h2 className="keypoint__titre">{titre}</h2>

        {/* DESCRIPTION */}
        <p className="keypoint__desc">{description}</p>

      </div>

      {/* ─── BANDE BASSE ─── */}
      <div className="slide-video__stripe">
        <span /><span /><span /><span /><span />
      </div>


    </div>
  );
}