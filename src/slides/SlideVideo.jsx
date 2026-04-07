// slides/SlideVideo.jsx
import React from "react";
import "./SlideVideo.css";

// Extrait l'ID YouTube d'une URL
function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function SlideVideo({ slide }) {
  const { videos } = slide;

  return (
    <div className="slide-video">

      {/* ─── FOND ─── */}
      <div className="slide-video__bg" />

      {/* ─── GRILLE VIDÉOS ─── */}
      <div className="slide-video__grid">
        {videos.map((v) => (
          <div key={v.id} className="video-card">

            {/* LABEL */}
            <p className="video-card__label">{v.label}</p>

            {/* PLAYER */}
            <div className="video-card__player-wrap">
              {v.youtubeId || extractYouTubeId(v.src) ? (
                <iframe
                  className="video-card__player"
                  src={`https://www.youtube.com/embed/${v.youtubeId || extractYouTubeId(v.src)}`}
                  title={v.label}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : v.src ? (
                <video
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