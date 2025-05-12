"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { navigationLinks } from "@/src/data";
import { Topbar } from "./topbar";
import Logo from "../ui/Logo";
import { ButtonQuote } from "../ui/button-quote";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine, RiMenu3Line } from "react-icons/ri";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setIsVisible(false); // Cache la navbar quand on descend
      } else {
        setIsVisible(true); // Affiche la navbar quand on monte
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Ferme le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[100] w-full bg-white/90 backdrop-blur transition-transform duration-500",
          `${isVisible ? "translate-y-0" : "-translate-y-full"}`
        )}
      >
        <Topbar />

        {/* Desktop */}
        <div
          className={cn(
            "relative z-[90] mx-auto max-w-7xl px-4 bg-white min-[1200px]:bg-transparent sm:px-6 lg:px-8 border-b border-transparent transition-colors duration-150",
            `${isMenuOpen && "max-[1200px]:border-light-gray"}`
          )}
        >
          <div className="relative flex items-center justify-between py-4 sm:py-6">
            <div className="flex items-center gap-2">
              <Logo size={220} mobileSize={160} className="sm:w-[220px]" />
            </div>

            <nav className="hidden min-[1200px]:flex items-center gap-6 text-lg xl:text-xl font-semibold">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-yellow transition-all duration-150 ease-in-out"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}

            <div className="flex items-center gap-4">
              <ButtonQuote
                label="Contactez-nous"
                className="hidden min-[1200px]:flex"
              />
              <button
                ref={buttonRef}
                className="min-[1200px]:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer"
                    >
                      <RiCloseLargeLine size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer"
                    >
                      <RiMenu3Line size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div className="absolute z-90 -top-[100vh] bg-yellow h-[100vh] w-full" />
        <div ref={menuRef} className="fixed top-0 z-80 w-full h-full">
          <div
            className={cn(
              "pt-[120px] sm:pt-[160px] pb-4 w-full min-[1200px]:hidden transition-transform duration-500 ease-in-out bg-white",
              `${isMenuOpen ? "translate-y-0 shadow-lg" : "-translate-y-full"}`
            )}
          >
            <div className="relative mx-auto px-4 sm:px-6 space-y-4">
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg sm:text-xl font-medium hover:text-yellow transition-colors duration-150"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <hr className="my-5 text-light-gray" />
              <ButtonQuote
                label="Contactez-nous"
                className="w-full md:w-fit"
                onClick={handleLinkClick}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
