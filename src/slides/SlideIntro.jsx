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

      {/* ─── CERCLE DÉCO FOND ─── */}
      <div className="intro__bg-circle intro__bg-circle--1" />
      <div className="intro__bg-circle intro__bg-circle--2" />

      {/* ─── CONTENU PRINCIPAL ─── */}
      <div className="intro__body">

        {/* LOGO */}
        <div className="intro__logo-wrap">
          {/*
            Remplace le src ci-dessous par le chemin de ton logo :
            ex: src="/logo-mdpise.png"
            Si tu n'as pas encore le fichier, l'initiale s'affiche en fallback.
          */}
          <img
            src="/logo-mdpise.png"
            alt="Logo MDPISE"
            className="intro__logo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          {/* Fallback si logo absent */}
          <div className="intro__logo-fallback">
            <span>MDPISE</span>
          </div>
        </div>

        {/* LABEL MINISTÈRE */}
        <p className="intro__label">MINISTÈRE DU DÉVELOPPEMENT ET DE LA PRODUCTIVITÉ<br />INDUSTRIELLE ET DU SECTEUR DE L'EMPLOI</p>

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