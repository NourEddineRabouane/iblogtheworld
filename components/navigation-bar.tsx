"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle-btn";
import { CommandIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Logo from "./logo";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "home" },
    { href: "/blog", label: "blogs" },
    { href: "/categories", label: "categories" },
    { href: "/contact", label: "contact" },
    { href: "/about", label: "about" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2 bg-background border-b border-border">
        <Logo />

        <div className="flex items-center gap-2">
          <span className="md:hidden">
            <ModeToggle />
          </span>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <CommandIcon size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-3">
          <ul className="flex gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="bg-secondary hover:bg-secondary/60 text-foreground px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-3 space-y-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="bg-secondary hover:bg-secondary/60 text-foreground px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
