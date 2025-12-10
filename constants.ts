import { Activity } from './types';

// 1. On récupère le chemin de base dynamique (défini dans vite.config.ts)
const BASE_URL = import.meta.env.BASE_URL;

export const ACTIVITIES: Activity[] = [
  {
    id: 'paintball',
    title: 'Paintball',
    description: 'Adrénaline et stratégie sur nos terrains scénarisés.',
    fullDescription: "Le classique indémodable. Affrontez vos amis sur nos terrains aménagés avec bunkers, forteresses et obstacles naturels. Idéal pour les enterrements de vie de garçon, anniversaires ou team building. Équipement complet fourni (masque, marqueur, combinaison).",
    // 2. On concatène la base + le nom du fichier (sans le / au début pour éviter les doubles //)
    image: `${BASE_URL}paintball.jpg`,
    minPlayers: 6,
    minAge: 12,
    price: '25€ / pers'
  },
  {
    id: 'gellyball',
    title: 'Gellyball',
    description: 'Le paintball sans douleur pour les plus jeunes.',
    fullDescription: "Découvrez le Gellyball, une alternative au paintball utilisant des billes d'eau gélifiées. Pas de peinture, pas de douleur, mais tout autant de fun ! Parfait pour les anniversaires d'enfants ou les familles qui veulent s'amuser sans impact.",
    image: `${BASE_URL}gellyball.jpg`,
    minPlayers: 4,
    minAge: 6,
    price: '15€ / pers'
  },
  {
    id: 'airsoft',
    title: 'Airsoft',
    description: 'Simulation militaire réaliste et tactique.',
    fullDescription: "Plongez dans l'immersion totale. Nos scénarios d'Airsoft sont conçus pour les amateurs de simulation militaire (Milsim). Répliques réalistes, objectifs tactiques et travail d'équipe sont au rendez-vous. Fair-play obligatoire.",
    image: `${BASE_URL}airsoft.jpg`,
    minPlayers: 6,
    minAge: 18,
    price: '30€ / pers'
  },
  {
    id: 'laser',
    title: 'Laser',
    description: 'Laser game en extérieur, précis et fun.',
    fullDescription: "Le Laser Game sort des salles obscures ! Profitez du grand air avec nos équipements infrarouges dernière génération. Portée de 150m, pas de projectiles, juste de la précision et de la stratégie. Accessible à tous.",
    image: `${BASE_URL}laser.jpg`,
    minPlayers: 4,
    minAge: 7,
    price: '18€ / pers'
  },
  {
    id: 'haches',
    title: 'Lancer de haches',
    description: 'Réveillez le Viking qui sommeille en vous.',
    fullDescription: "Une activité insolite et défoulante. Apprenez l'art du lancer de hache sur nos cibles en bois sécurisées. Nos instructeurs vous guideront pour réussir le planté parfait. Compétitions amicales et bonne humeur garanties.",
    image: `${BASE_URL}hache.jpg`,
    minPlayers: 2,
    minAge: 16,
    price: '12€ / pers'
  },
  {
    id: 'archery',
    title: 'Archery Tag',
    description: 'La balle aux prisonniers avec des arcs.',
    fullDescription: "Un mélange explosif entre le tir à l'arc et la balle aux prisonniers. Équipés d'arcs et de flèches à embouts en mousse, visez vos adversaires ou les cibles pour remporter la victoire. Dynamique et sécurisé.",
    image: `${BASE_URL}arc.jpg`,
    minPlayers: 6,
    minAge: 10,
    price: '20€ / pers'
  },
  {
    id: 'bubble',
    title: 'Bubble Foot',
    description: 'Du foot, des bulles et beaucoup de chocs !',
    fullDescription: "Enfermé dans une bulle géante transparente, jouez au foot comme jamais auparavant. Les chocs sont indolores mais hilarants. Rebondissez, roulez et essayez de marquer des buts dans le chaos le plus total.",
    image: `${BASE_URL}bubblef.jpg`,
    minPlayers: 8,
    minAge: 10,
    price: '22€ / pers'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel de "Aventure Paintball Park" à Toulouse.
Ton rôle est de répondre aux questions des visiteurs sur les activités proposées, de manière enthousiaste, sportive et amicale.

Voici les informations sur les activités :
${JSON.stringify(ACTIVITIES)}

Règles de comportement :
1. Réponds de manière concise (max 3 phrases si possible).
2. Utilise des emojis liés au sport et au fun (🎯, 🔫, 🌳, 🔥).
3. Si on te demande une activité qui n'est pas dans la liste, dis poliment que nous ne la proposons pas.
4. Encourage les utilisateurs à réserver.
5. Parle toujours en Français.
`;