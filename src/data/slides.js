// ─────────────────────────────────────────────────────────────
//  data/slides.js  —  Configuration centrale des slides MDPISE
//  Modifie ce fichier pour mettre à jour le contenu du discours
// ─────────────────────────────────────────────────────────────

export const MINISTRE = {
  nom:       "Prof. Robert Dussey",           // ← remplace par le bon nom
  titre:     "Ministre du Développement et de la Productivité Industrielle et du Secteur de l'Emploi",
  date:      "Lomé, Avril 2025",
  discours:  "Discours sur l'Emploi, l'Industrie et la Croissance Inclusive au Togo",
};

// ─── POINTS CLEFS ────────────────────────────────────────────
// type: "intro" | "keypoint" | "video"
// Pour les keypoints : icon (emoji ou texte), chiffre, unite, titre, description

export const SLIDES = [
  {
    id: 0,
    type: "intro",
  },

  {
    id: 1,
    type: "keypoint",
    icon: "🏭",
    chiffre: "450",
    unite: "entreprises",
    titre: "Industries soutenues",
    description:
      "Le gouvernement a accompagné plus de 450 entreprises industrielles à travers des mécanismes de financement, de formation et d'encadrement technique.",
    couleurAccent: "#008751",
  },

  {
    id: 2,
    type: "keypoint",
    icon: "👷",
    chiffre: "120 000",
    unite: "emplois créés",
    titre: "Création d'emplois",
    description:
      "Grâce aux programmes nationaux d'insertion professionnelle, plus de 120 000 jeunes togolais ont accédé à un emploi décent depuis 2020.",
    couleurAccent: "#FFCE00",
  },

  {
    id: 3,
    type: "keypoint",
    icon: "📈",
    chiffre: "8,2%",
    unite: "de croissance",
    titre: "Croissance du secteur industriel",
    description:
      "Le secteur industriel togolais affiche une croissance soutenue de 8,2% en 2024, portée par les investissements publics et privés stratégiques.",
    couleurAccent: "#D21034",
  },

  {
    id: 4,
    type: "keypoint",
    icon: "🎓",
    chiffre: "35 000",
    unite: "bénéficiaires",
    titre: "Formation professionnelle",
    description:
      "Les centres de formation professionnelle ont formé 35 000 personnes dans des métiers porteurs : numérique, agro-industrie, BTP et artisanat.",
    couleurAccent: "#008751",
  },

  {
    id: 5,
    type: "keypoint",
    icon: "💼",
    chiffre: "72",
    unite: "milliards FCFA",
    titre: "Investissements mobilisés",
    description:
      "72 milliards de francs CFA ont été mobilisés auprès des partenaires au développement pour financer les projets d'emploi et d'industrialisation.",
    couleurAccent: "#FFCE00",
  },

  {
    id: 6,
    type: "keypoint",
    icon: "🌍",
    chiffre: "28",
    unite: "préfectures",
    titre: "Couverture nationale",
    description:
      "Les actions du ministère couvrent désormais les 28 préfectures du Togo, assurant une répartition équitable des opportunités économiques.",
    couleurAccent: "#D21034",
  },

  {
    id: 7,
    type: "video",
    titre: "Reportages & Témoignages",
    sousTitre: "Découvrez l'impact des programmes du MDPISE sur le terrain",
    videos: [
      {
        id: "v1",
        label: "Programme HIMO — Emplois ruraux",
        // ← Remplace src par le chemin réel de ta vidéo (ex: /videos/himo.mp4)
        src: "",
        poster: "",
        description: "Retour sur les chantiers à haute intensité de main d'œuvre dans les régions.",
      },
      {
        id: "v2",
        label: "Formation & Insertion — Lomé Tech",
        src: "",
        poster: "",
        description: "Les jeunes togolais témoignent de leur parcours de formation numérique.",
      },
    ],
  },
];