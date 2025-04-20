"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { contactInfo, navigationLinks } from "@/src/data";
import { Topbar } from "./topbar";
import Logo from "../ui/Logo";
import { Button } from "../ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Topbar />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center gap-2">
            <Logo size="220" />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xl font-semibold">
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

          <div className="flex items-center gap-4">
            <Button variant="default">Contactez-nous</Button>
            {/* <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              📞 {contactInfo.displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
