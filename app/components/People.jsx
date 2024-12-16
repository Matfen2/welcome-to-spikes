import React from "react";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";

// Données des personnes
const people = [
  {
    icon: "/picts/people/Shoguntoto.png",
    name: "Shoguntoto",
    email: "@thomasdev59",
    review: "Ezis répond à toutes les questions afin de nous aider le plus possible dans notre objectif.",
  },
  {
    icon: "/picts/people/Hocine.png",
    name: "Hocine",
    email: "@hocine",
    review: "J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions.",
  },
  {
    icon: "/picts/people/Youtmax654.png",
    name: "Youtmax654",
    email: "@youtmax654",
    review: "Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de travailler sur un projet.",
  },
  {
    icon: "/picts/people/Baptiste.png",
    name: "Baptiste",
    email: "@baptiste_lechat",
    review: "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.",
  },
  {
    icon: "/picts/people/Lois.png",
    name: "Lois",
    email: "@loisglld",
    review: "Je suis surpris de la qualité des ressources et de la pertinence du contenu pour lequel je me suis abonné !",
  },
  {
    icon: "/picts/people/LucasQust.png",
    name: "LucasQust",
    email: "@LucasQust",
    review: "C’est vraiment lourd, les challenges sont cool, l’environnement qu’Ezis a mis en place est top !",
  },
  {
    icon: "/picts/people/Jojok63.png",
    name: "Jojok63",
    email: "@jojok_63",
    review: "Une communauté très réactive, toujours prête à vous aider quelque soit le sujet.",
  },
  {
    icon: "/picts/people/Eihposenna.png",
    name: "Eihposenna",
    email: "@eihposenna",
    review: "Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes.",
  },
];

// Carte individuelle d'une personne
const ReviewCard = ({ icon, name, email, review }) => {
  return (
    <div
      className="w-[287px] h-[160px] rounded-[12px] bg-gradient-to-b from-[#4C3182] to-[#6C4DFF] p-[1px]"
    >
      <div
        className="h-full bg-[#0c0c1c] rounded-[12px] shadow-[inset_0_-4px_44px_0_rgba(69,52,105,0.1)]"
        style={{
          padding: "16px 24px 16px 24px",
          boxShadow: "inset 0 -4px 44px 0 rgba(69, 52, 105, 0.1)",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <Image
            className="rounded-full"
            width={32}
            height={32}
            alt={name}
            src={icon}
          />
          <div>
            <figcaption className="text-[14px] font-semibold text-white">{name}</figcaption>
            <p className="text-[10px] text-gray-400">{email}</p>
          </div>
        </div>
        <blockquote className="mt-[10px] text-[14px] text-white">{review}</blockquote>
      </div>
    </div>
  );
};

// Composant principal
const People = () => {
  const firstRow = people.slice(0, Math.ceil(people.length / 2));
  const secondRow = people.slice(Math.ceil(people.length / 2));

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0c0c1c] py-16">
      {/* Première ligne */}
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex gap-4">
          {firstRow.map((person, index) => (
            <ReviewCard key={index} {...person} />
          ))}
        </div>
      </Marquee>

      {/* Deuxième ligne */}
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-0">
        <div className="flex gap-4">
          {secondRow.map((person, index) => (
            <ReviewCard key={index} {...person} />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default People;
