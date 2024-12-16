import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GridPattern } from "../../public/grid-pattern";

const Footer = () => {
  return (
    <footer className="relative h-[160px] bg-[#0c0c1c] flex items-end justify-center overflow-hidden">
      {/* Grid en arrière-plan */}
      <GridPattern className="absolute inset-0 w-full h-full opacity-20" />

      {/* Effet de flou */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Bouton */}
      <div className="relative z-10 mb-8 h-[40px] w-[201px] ">
        <a
          href="https://www.spikes.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 rounded-full text-white text-sm font-semibold border border-[#6c4dff] backdrop-blur-md hover:bg-white/10 transition duration-300"
          style={{
            borderWidth: "1px",
            fontSize: "16px",
            boxShadow: "inset 0 0 44px -4px hsla(260, 51%, 41%, 0.5)",
          }}
        >
          www.spikes.dev
          <GoArrowRight className="ml-2 inline-block w-[16px] h-[16px]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
