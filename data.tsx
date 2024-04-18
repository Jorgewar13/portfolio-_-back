// data.tsx
import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export const dataCounter = {
  // Define aquí las propiedades y datos necesarios para dataCounter
};

export const socialNetworks = [
  {
    id: 1,
    logo: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
    src: "https://www.linkedin.com/in/jorge-amores-s%C3%A1nchez/",
  },
  {
    id: 2,
    logo: <FontAwesomeIcon icon={faInstagram} size="lg" />,
    src: "https://www.instagram.com/jorgewar13/",
  },
  {
    id: 3,
    logo: <FontAwesomeIcon icon={faGithub} size="lg" />,
    src: "https://github.com/Jorgewar13",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Mi equipo pokemon ",
    image: "/pokemon.png",
    urlGithub: "https://github.com/Jorgewar13/Mi-equipo-pokemon",
    urlDemo: "https://jorgewar13.github.io/Mi-equipo-pokemon/",
  },
  {
    id: 2,
    title: "Libro",
    image: "/libro.png",
    urlGithub: "https://github.com/Jorgewar13/Libro",
    urlDemo: "https://libro-omega.vercel.app/",
  },
  {
    id: 3,
    title: "Mar",
    image: "/mar.png",
    urlGithub: "https://github.com/Jorgewar13/Mar",
    urlDemo: "https://mar-1.vercel.app/",
  },
  {
    id: 4,
    title: "vr-cyberpunk",
    image: "/cyberpunk.png",
    urlGithub: "https://github.com/Jorgewar13/vr-cyberpunk",
    urlDemo: "https://jorgewar13.github.io/vr-cyberpunk/",
  },
];
