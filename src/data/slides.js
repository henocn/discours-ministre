// ─────────────────────────────────────────────────────────────
//  data/slides.js  —  Configuration centrale des slides MDPISE
//  Modifie ce fichier pour mettre à jour le contenu du discours
// ─────────────────────────────────────────────────────────────

export const MINISTRE = {
  nom:       "Dr Arthur TRIMUA",
  titre:     "Ministre Délégué chargé de la Promotion des Investissements et de la Souveraineté économique",
  date:      "Lomé, Avril 2025",
  discours:  "Intervention du Ministre – Assemblée parlementaire de la Francophonie",
};

// ─── POINTS CLEFS ────────────────────────────────────────────
// type: "intro" | "keypoint" | "video" | "content"

export const SLIDES = [
  {
    id: 0,
    type: "intro",
  },

  {
    id: 1,
    type: "video",
    videos: [
      {
        id: "v1",
        label: "Évolution des lois économiques et création de la Plateforme Industrielle d'Adétikopé",
        youtubeId: "yhIB71e9Sdc",
        src: "",
        poster: "",
      },
    ],
  },

  {
    id: 2,
    type: "content",
    icon: "🏭",
    titre: "La Plateforme Industrielle d'Adétikopé",
    description: "Issue du Code des Investissements, la PIA illustre comment un cadre juridique clair et stable peut transformer un terrain en un espace économique dynamique, attirer les investisseurs et ouvrir des perspectives d'emploi pour les jeunes.",
    couleurAccent: "#008751",
  },

  {
    id: 3,
    type: "video",
    videos: [
      {
        id: "v2",
        label: "Femmes travaillant sur la Plateforme Industrielle d'Adétikopé",
        youtubeId: "yhIB71e9Sdc",
        src: "",
        poster: "",
      },
    ],
  },

  {
    id: 4,
    type: "content",
    icon: "🌍",
    titre: "Une vision pour l'avenir",
    description: "Au-delà des infrastructures et des lois, le développement économique doit être un développement humain. Le Togo s'engage pour l'inclusion, l'employabilité des jeunes et la création de zones économiques spéciales pour démultiplier les opportunités sur tout le territoire.",
    couleurAccent: "#FFCE00",
  },
];
