import { useState } from "react";
import hamburgerimg from "../assets/images/icon-hamburger.svg";
import closeimg from "../assets/images/icon-close-menu.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        bg-cover bg-center
        h-96
        px-6 py-8
        flex items-start justify-between
        bg-[url('/image-hero-mobile.jpg')]
        md:bg-[url('/image-hero-desktop.jpg')]
      "
    >
      {/* Logo */}
      <h3 className="font-extrabold text-white text-lg">
        Crowdfund
      </h3>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li className="text-white cursor-pointer">About</li>
        <li className="text-white cursor-pointer">Discovery</li>
        <li className="text-white cursor-pointer">Get Started</li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={menuOpen ? closeimg : hamburgerimg}
          alt="menu toggle"
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white rounded-xl shadow-lg md:hidden">
          <ul className="flex flex-col divide-y">
            <li className="p-4 font-medium">About</li>
            <li className="p-4 font-medium">Discovery</li>
            <li className="p-4 font-medium">Get Started</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
