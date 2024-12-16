import React from "react";
import logo from "../../public/picts/Spikes Logo.svg"
import { GridPattern } from "../../public/grid-pattern";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative h-[390.59px] flex items-center justify-center bg-[#0c0c1c] overflow-hidden">
      {/* Grid en SVG */}
      <GridPattern className="absolute inset-0 w-full h-full opacity-20" style={{color: 'hsba(226, 8%, 87%, 0)'}} />

      {/* Logo */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Spikes Logo"
            className="w-[121px] h-[32px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
