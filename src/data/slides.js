// ─────────────────────────────────────────────────────────────
//  data/slides.js  —  Configuration centrale des slides MDPISE
//  Structure: Intro → Vidéo 1 → 3 Chiffres PIA → Content 1 → Vidéo 2 → 3 Chiffres Inclusion → Conclusion
// ─────────────────────────────────────────────────────────────

export const MINISTRE = {
  nom:       "Dr Arthur TRIMUA",
  titre:     "Ministre Délégué chargé de la Promotion des Investissements et de la Souveraineté économique",
  date:      "Lomé, Avril 2025",
  discours:  "Intervention du Ministre – Assemblée parlementaire de la Francophonie",
};

// ─── SLIDES ────────────────────────────────────────────────────
// type: "intro" | "keypoint" | "video" | "content"
// icon: nom de l'icône Lucide (MapPin, Landmark, Users, Award, Store, Wallet, etc.)

export const SLIDES = [
  // 1. INTRODUCTION
  {
    id: 0,
    type: "intro",
  },

  // 2. VIDÉO 1: Évolution législative et naissance de la PIA
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

  // 3. CHIFFRE 1: Superficie PIA
  {
    id: 2,
    type: "keypoint",
    chiffre: "400",
    suffixe: "",
    unite: "hectares",
    icon: "MapPin",
    titre: "Plateforme Industrielle d'Adétikopé",
    description: "Étendue sur 400 hectares, issue directement du Code des Investissements de 2019.",
    couleurAccent: "#FFCE00",
  },

  // 4. CHIFFRE 2: Investissements
  {
    id: 3,
    type: "keypoint",
    chiffre: "130",
    suffixe: "+",
    unite: "Mds FCFA",
    icon: "Landmark",
    titre: "Investissements mobilisés",
    description: "Plus de 130 milliards de francs CFA mobilisés dans la première phase.",
    couleurAccent: "#FFCE00",
  },

  // 5. CHIFFRE 3: Emplois
  {
    id: 4,
    type: "keypoint",
    chiffre: "35",
    suffixe: "",
    unite: "000 emplois",
    icon: "Users",
    titre: "Opportunités créées",
    description: "Près de 35 000 emplois directs et indirects attendus à terme.",
    couleurAccent: "#FFCE00",
  },

  // 6. PRISE DE PAROLE 2: Du terrain aux emplois
  {
    id: 5,
    type: "content",
    icon: "Factory",
    titre: "Du terrain à l'emploi",
    description: "Il y a quelques années, cet espace n'était qu'un terrain. Aujourd'hui, des entreprises s'installent, des chaînes de production se mettent en place, et des milliers de jeunes trouvent une perspective d'emploi.",
    couleurAccent: "#FFCE00",
  },

  // 7. VIDÉO 2: Portrait de femmes à la PIA
  {
    id: 6,
    type: "video",
    videos: [
      {
        id: "v2",
        label: "Portrait de femmes travaillant sur la Plateforme Industrielle d'Adétikopé",
        youtubeId: "yhIB71e9Sdc",
        src: "",
        poster: "",
      },
    ],
  },

  // 8. CHIFFRE 4: Droits des femmes
  {
    id: 7,
    type: "keypoint",
    chiffre: "84,4",
    suffixe: "/100",
    unite: "2ème en Afrique",
    icon: "Award",
    titre: "Droits économiques des femmes",
    description: "Le Togo est classé deuxième pays en Afrique pour les droits économiques des femmes.",
    couleurAccent: "#FFCE00",
  },

  // 9. CHIFFRE 5: Commerce informel
  {
    id: 8,
    type: "keypoint",
    chiffre: "81",
    suffixe: "%",
    unite: "du commerce",
    icon: "Store",
    titre: "Porté par des femmes",
    description: "81% du commerce informel togolais est porté par des femmes.",
    couleurAccent: "#FFCE00",
  },

  // 10. CHIFFRE 6: Crédits femmes
  {
    id: 9,
    type: "keypoint",
    chiffre: "72",
    suffixe: "%",
    unite: "des crédits",
    icon: "Wallet",
    titre: "Finance inclusive",
    description: "72% des crédits du Fonds national de la finance inclusive octroyés à des femmes sur dix ans.",
    couleurAccent: "#FFCE00",
  },

  // 11. CONCLUSION: Vision et défis
  {
    id: 10,
    type: "content",
    icon: "Globe",
    titre: "Une vision pour l'avenir",
    description: "D'ici 2030, 600 millions d'emplois devront être créés en Afrique. Le Togo s'engage avec des zones économiques spéciales pour permettre aux jeunes de construire leur avenir là où ils sont nés.",
    couleurAccent: "#D21034",
  },
];
