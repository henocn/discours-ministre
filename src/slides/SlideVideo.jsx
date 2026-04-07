// slides/SlideVideo.jsx
import React, { useRef } from "react";
import "./SlideVideo.css";

export default function SlideVideo({ slide }) {
  const { titre, sousTitre, videos } = slide;
  const refs = [useRef(null), useRef(null)];

  const togglePlay = (i) => {
    const video = refs[i].current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  return (
    <div className="slide-video">

      {/* ─── FOND ─── */}
      <div className="slide-video__bg" />

      {/* ─── EN-TÊTE ─── */}
      <div className="slide-video__header">
        <div className="slide-video__icon">▶</div>
        <div>
          <h2 className="slide-video__titre">{titre}</h2>
          <p className="slide-video__sous">{sousTitre}</p>
        </div>
      </div>

      {/* ─── GRILLE VIDÉOS ─── */}
      <div className="slide-video__grid">
        {videos.map((v, i) => (
          <div key={v.id} className="video-card">

            {/* LABEL */}
            <p className="video-card__label">{v.label}</p>

            {/* PLAYER */}
            <div className="video-card__player-wrap" onClick={() => togglePlay(i)}>
              {v.src ? (
                <video
                  ref={refs[i]}
                  className="video-card__player"
                  src={v.src}
                  poster={v.poster || undefined}
                  playsInline
                  controls
                />
              ) : (
                /* Placeholder quand aucune vidéo n'est encore fournie */
                <div className="video-card__placeholder">
                  <div className="video-card__play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="video-card__placeholder-text">
                    Ajouter la vidéo dans <code>data/slides.js</code>
                  </p>
                </div>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="video-card__desc">{v.description}</p>

          </div>
        ))}
      </div>

      {/* ─── BANDE BASSE ─── */}
      <div className="slide-video__stripe">
        <span /><span /><span /><span /><span />
      </div>

    </div>
  );
}