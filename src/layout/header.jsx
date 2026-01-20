import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="w-full bg-[#0b120f] text-white">
      <div className="mx-auto flex h-14  items-center justify-between px-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Petpooja Tasks"
            className="h-7 w-auto shrink-0 object-contain sm:h-8 md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#industries" className="transition-colors hover:text-white">
            Industries
          </a>
          <a href="#why-us" className="transition-colors hover:text-white">
            Why Us
          </a>
          <a href="#faqs" className="transition-colors hover:text-white">
            FAQs
          </a>
        </nav>

        <a
          href="#get-started"
          className="rounded-md bg-[#008745] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#006d38]"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
