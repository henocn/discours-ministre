// ─────────────────────────────────────────────────────────────
//  data/slides.js  —  Configuration centrale des slides MDPISE
//  Structure: Intro → Vidéo 1 → 7 Chiffres (PIA + Inclusion) → Content → Vidéo 2 → 5 Chiffres (Conclusion) → Content
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
    chiffre: "130 Mds",
    suffixe: "",
    unite: " FCFA",
    icon: "Landmark",
    titre: "Investissements mobilisés",
    description: "Plus de 130 milliards de francs CFA mobilisés dans la première phase.",
    couleurAccent: "#FFCE00",
  },

  // 5. CHIFFRE 3: Emplois
  {
    id: 4,
    type: "keypoint",
    chiffre: "35 000",
    suffixe: "",
    unite: "emplois",
    icon: "Users",
    titre: "Opportunités créées",
    description: "Près de 35 000 emplois directs et indirects attendus à terme.",
    couleurAccent: "#FFCE00",
  },

  // 6. CHIFFRE 4: Droits des femmes
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

  // 7. CHIFFRE 5: Commerce informel
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

  // 8. CHIFFRE 6: Transformation agroalimentaire
  {
    id: 11,
    type: "keypoint",
    chiffre: "70",
    suffixe: "%",
    unite: "transformation",
    icon: "Factory",
    titre: "Agroalimentaire",
    description: "70% de la transformation agroalimentaire est assurée par des femmes.",
    couleurAccent: "#FFCE00",
  },

  // 9. CHIFFRE 7: Crédits femmes
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

  // 10. PRISE DE PAROLE: Du terrain aux emplois
  {
    id: 5,
    type: "content",
    icon: "Factory",
    titre: "Du terrain à l'emploi",
    description: "Il y a quelques années, cet espace n'était qu'un terrain. Aujourd'hui, des entreprises s'installent, des chaînes de production se mettent en place, et des milliers de jeunes trouvent une perspective d'emploi.",
    couleurAccent: "#FFCE00",
  },

  // 11. VIDÉO 2: Portrait de femmes à la PIA
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

  // 12. CHIFFRE 8: Jeunes sur le marché du travail
  {
    id: 12,
    type: "keypoint",
    chiffre: "10-12",
    suffixe: "",
    unite: "millions/an",
    icon: "Users",
    titre: "Jeunes en Afrique",
    description: "Chaque année, entre 10 et 12 millions de jeunes arrivent sur le marché du travail en Afrique.",
    couleurAccent: "#FFCE00",
  },

  // 13. CHIFFRE 9: Jeunes cherchant emploi 2030
  {
    id: 13,
    type: "keypoint",
    chiffre: "400",
    suffixe: "",
    unite: "millions",
    icon: "Users",
    titre: "À la recherche d'emploi d'ici 2030",
    description: "D'ici 2030, plus de 400 millions de jeunes chercheront un emploi sur notre continent.",
    couleurAccent: "#FFCE00",
  },

  // 14. CHIFFRE 10: Emplois à créer
  {
    id: 14,
    type: "keypoint",
    chiffre: "600",
    suffixe: "",
    unite: "millions d'emplois",
    icon: "Briefcase",
    titre: "Emplois à créer d'ici 2030",
    description: "Près de 600 millions d'emplois devront être créés pour répondre à cette dynamique démographique.",
    couleurAccent: "#FFCE00",
  },

  // 15. CHIFFRE 11: Économie informelle
  {
    id: 15,
    type: "keypoint",
    chiffre: "70",
    suffixe: "%",
    unite: "économie informelle",
    icon: "Store",
    titre: "Jeunes travailleurs",
    description: "Plus de 70% des jeunes travaillent dans l'économie informelle.",
    couleurAccent: "#FFCE00",
  },

  // 16. CHIFFRE 12: Sous-emploi
  {
    id: 16,
    type: "keypoint",
    chiffre: "1",
    suffixe: " sur 3",
    unite: "jeunes",
    icon: "AlertTriangle",
    titre: "Sous-emploi",
    description: "Un jeune sur trois se trouve en situation de sous-emploi ou d'emploi instable.",
    couleurAccent: "#FFCE00",
  },

  // 17. CONCLUSION: Vision et défis
  {
    id: 10,
    type: "content",
    icon: "Globe",
    titre: "Une vision pour l'avenir",
    description: "C'est dans cet esprit que nous poursuivons la transformation économique au Togo. La Plateforme Industrielle d'Adétikopé en est une première illustration, mais cette dynamique a vocation à s'étendre à l'ensemble du territoire grâce aux zones économiques spéciales.",
    couleurAccent: "#FFCE00",
  },
];
