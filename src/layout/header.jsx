import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.svg";

const MenuBarsIcon = ({ open }) => {
  const topRef = useRef(null);
  const midRef = useRef(null);
  const botRef = useRef(null);

  useEffect(() => {
    const top = topRef.current;
    const mid = midRef.current;
    const bot = botRef.current;

    if (!top || !mid || !bot) return;

    gsap.set([top, mid, bot], { transformOrigin: "50% 50%" });

    if (open) {
      gsap.to(top, { y: 5, rotation: 45, duration: 0.25, ease: "power2.out" });
      gsap.to(mid, { opacity: 0, duration: 0.15, ease: "power1.out" });
      gsap.to(bot, {
        y: -5,
        rotation: -45,
        duration: 0.25,
        ease: "power2.out",
      });
    } else {
      gsap.to(top, { y: 0, rotation: 0, duration: 0.25, ease: "power2.out" });
      gsap.to(mid, { opacity: 1, duration: 0.2, ease: "power1.out" });
      gsap.to(bot, { y: 0, rotation: 0, duration: 0.25, ease: "power2.out" });
    }
  }, [open]);

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        ref={topRef}
        x1="4"
        y1="7"
        x2="20"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        ref={midRef}
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        ref={botRef}
        x1="4"
        y1="17"
        x2="20"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Header = () => {
  const [showCta, setShowCta] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowCta(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full text-white bg-black/100 md:bg-transparent">
      <div className="relative w-full ">
        <div className="mx-auto flex items-center justify-between px-[16px] py-[16px] sm:px-[24px] sm:py-[24px] md:px-[112px] md:py-[16px]">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Petpooja Tasks"
              className="h-7 w-auto shrink-0 object-contain sm:h-8 md:h-11"
            />
          </a>

          <nav className="hidden md:flex">
            <div className="flex items-center gap-4 rounded-full bg-[#0006] px-2 py-1 font-['DM_Sans'] text-[16px] font-medium text-[#d1d5db] backdrop-blur-md">
              <a
                href="#features"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                Features
              </a>
              <a
                href="#industries"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                Industries
              </a>
              <a
                href="#why-us"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                Why Us
              </a>
              <a
                href="#faqs"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                FAQs
              </a>
            </div>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white/90"
          >
            <MenuBarsIcon open={mobileMenuOpen} />
          </button>

          <a
            href="#get-started"
            className={`hidden md:inline-flex cursor-pointer rounded-[8px] bg-[#008745] px-[24px] py-[10px] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#008745] hover:font-bold ${
              showCta
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-1 opacity-0"
            }`}
          >
            Get Started
          </a>
        </div>

        <div
          className={`fixed inset-0 z-55 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-[100%] max-w-[360px] bg-black/90 backdrop-blur-xl border-l border-white/10 transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-100"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <div className="text-[16px] font-semibold text-white">Menu</div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white/90"
              >
                <MenuBarsIcon open={mobileMenuOpen} />
              </button>
            </div>

            <div className="px-5 pb-6">
              <div className="flex flex-col gap-2 text-[16px] font-medium text-[#d1d5db]">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-white/5"
                >
                  Features
                </a>
                <a
                  href="#industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-white/5"
                >
                  Industries
                </a>
                <a
                  href="#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-white/5"
                >
                  Why Us
                </a>
                <a
                  href="#faqs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-white/5"
                >
                  FAQs
                </a>
              </div>

              <a
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-[10px] bg-[#008745] px-4 py-3 text-[16px] font-semibold text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
