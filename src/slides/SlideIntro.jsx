// slides/SlideIntro.jsx
import React from "react";
import { MINISTRE } from "../data/slides";
import "./SlideIntro.css";

export default function SlideIntro() {
  return (
    <div className="intro">

      {/* ─── BANDES DÉCO HAUT ─── */}
      <div className="togo-stripe intro__stripe-top">
        <span /><span /><span /><span /><span />
      </div>

      {/* ─── CONTENU PRINCIPAL ─── */}
      <div className="intro__body">

        {/* LOGO */}
        <div className="intro__logo-wrap">
          <img
            src="/MDPISE.jpeg"
            alt="Logo MDPISE"
            className="intro__logo"
          />
        </div>

        {/* SÉPARATEUR */}
        <div className="intro__divider">
          <span className="intro__divider-dot" />
          <span className="intro__divider-line" />
          <span className="intro__divider-dot" />
        </div>

        {/* TITRE DISCOURS */}
        <h1 className="intro__titre">{MINISTRE.discours}</h1>

        {/* MINISTRE */}
        <div className="intro__ministre">
          <p className="intro__ministre-nom">{MINISTRE.nom}</p>
          <p className="intro__ministre-titre">{MINISTRE.titre}</p>
        </div>

        {/* DATE */}
        <p className="intro__date">{MINISTRE.date}</p>

      </div>

      {/* ─── BANDES DÉCO BAS ─── */}
      <div className="togo-stripe intro__stripe-bottom">
        <span /><span /><span /><span /><span />
      </div>

    </div>
  );
}