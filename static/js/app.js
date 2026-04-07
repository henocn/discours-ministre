// ═════════════════════════════════════════════════════════════
//  js/app.js  —  Application Vanilla JS (convertie depuis React)
// ═════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ─── ÉTAT GLOBAL ───────────────────────────────────────────
  let currentSlide = 0;
  let isAnimating = false;

  // ─── RÉFÉRENCES DOM ──────────────────────────────────────
  const container = document.getElementById('slides-container');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const dotsContainer = document.getElementById('progress-dots');
  const counter = document.getElementById('slide-counter');

  // ─── EXTRACTEUR YOUTUBE ──────────────────────────────────
  function extractYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  // ─── RENDERERS DES SLIDES ─────────────────────────────────
  function renderIntro() {
    return `
      <div class="intro">
        <div class="intro__stripe-top togo-stripe">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="intro__body">
          <div class="intro__logo-wrap">
            <img src="MDPISE.png" alt="Logo MDPISE" class="intro__logo" onerror="this.style.display='none'" />
          </div>

          <div class="intro__divider">
            <span class="intro__divider-dot"></span>
            <span class="intro__divider-line"></span>
            <span class="intro__divider-dot"></span>
          </div>

          <h1 class="intro__titre">${MINISTRE.discours}</h1>

          <div class="intro__ministre">
            <p class="intro__ministre-nom">${MINISTRE.nom}</p>
            <p class="intro__ministre-titre">${MINISTRE.titre}</p>
          </div>

          <p class="intro__date">${MINISTRE.date}</p>
        </div>

        <div class="intro__stripe-bottom togo-stripe">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  function renderVideo(slide) {
    const video = slide.videos[0];
    const youtubeId = video.youtubeId || extractYouTubeId(video.src);
    
    let playerHtml;
    if (youtubeId) {
      // Paramètres YouTube pour meilleure intégration
      const ytParams = 'rel=0&modestbranding=1&enablejsapi=1';
      playerHtml = `<iframe class="video-card__player" 
        src="https://www.youtube.com/embed/${youtubeId}?${ytParams}" 
        title="${video.label}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
        allowfullscreen
        loading="eager"></iframe>`;
    } else if (video.src) {
      playerHtml = `<video class="video-card__player" src="${video.src}" controls playsinline></video>`;
    } else {
      playerHtml = `
        <div class="video-card__placeholder">
          <div class="video-card__play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <p class="video-card__placeholder-text">Ajouter la vidéo dans <code>js/slides.js</code></p>
        </div>
      `;
    }

    return `
      <div class="slide-video">
        <div class="slide-video__bg"></div>
        
        <div class="slide-video__grid">
          <div class="video-card">
            <p class="video-card__label">${video.label}</p>
            <div class="video-card__player-wrap">
              ${playerHtml}
            </div>
          </div>
        </div>

        <div class="slide-video__stripe togo-stripe">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  function renderContent(slide, index) {
    const isContent = slide.type === 'content';
    const hasIcon = !isContent && slide.icon;
    
    return `
      <div class="keypoint" style="--accent: ${slide.couleurAccent || '#008751'}">
        <div class="keypoint__bg-ring keypoint__bg-ring--1"></div>
        <div class="keypoint__bg-ring keypoint__bg-ring--2"></div>
        <div class="keypoint__bg-glow"></div>

        <div class="keypoint__card ${isContent ? 'keypoint__card--content' : ''}">
          ${hasIcon ? `
            <div class="keypoint__icon-wrap">
              <span class="keypoint__icon" role="img" aria-label="${slide.titre}">${slide.icon}</span>
            </div>
          ` : ''}

          <div class="keypoint__sep"></div>

          <h2 class="keypoint__titre">${slide.titre}</h2>

          <p class="keypoint__desc">${slide.description}</p>
        </div>

        <div class="keypoint__accent-bar"></div>
      </div>
    `;
  }

  // ─── RENDER GLOBAL ────────────────────────────────────────
  function initSlides() {
    container.innerHTML = '';
    
    SLIDES.forEach((slide, index) => {
      const slideEl = document.createElement('div');
      slideEl.className = 'slide';
      slideEl.dataset.index = index;
      
      let content;
      switch (slide.type) {
        case 'intro':
          content = renderIntro();
          break;
        case 'video':
          content = renderVideo(slide);
          break;
        case 'content':
        case 'keypoint':
          content = renderContent(slide, index);
          break;
        default:
          content = '<div class="keypoint"><div class="keypoint__card"><h2 class="keypoint__titre">Slide</h2></div></div>';
      }
      
      slideEl.innerHTML = content;
      container.appendChild(slideEl);
    });

    // Créer les dots
    dotsContainer.innerHTML = '';
    SLIDES.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'progress-dot';
      dot.dataset.index = index;
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    updateUI();
  }

  // ─── NAVIGATION ──────────────────────────────────────────
  function updateUI() {
    // Mettre à jour les slides actives
    document.querySelectorAll('.slide').forEach((slide, index) => {
      slide.classList.remove('active', 'exit');
      if (index === currentSlide) {
        slide.classList.add('active');
      } else if (index < currentSlide) {
        slide.classList.add('exit');
      }
    });

    // Mettre à jour les dots
    document.querySelectorAll('.progress-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    // Mettre à jour les boutons
    btnPrev.disabled = currentSlide === 0;
    btnNext.disabled = currentSlide === SLIDES.length - 1;

    // Mettre à jour le compteur
    counter.textContent = `${currentSlide + 1} / ${SLIDES.length}`;
  }

  function goToSlide(index) {
    if (index < 0 || index >= SLIDES.length || index === currentSlide) return;
    currentSlide = index;
    updateUI();
  }

  function nextSlide() {
    if (currentSlide < SLIDES.length - 1) {
      currentSlide++;
      updateUI();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateUI();
    }
  }

  // ─── EVENT LISTENERS ────────────────────────────────────
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      prevSlide();
    }
  });

  // Swipe tactile
  let touchStartX = 0;
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });

  // ─── INITIALISATION ──────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initSlides();
    console.log('🎬 Présentation MDPISE chargée - ' + SLIDES.length + ' slides');
  });

})();
