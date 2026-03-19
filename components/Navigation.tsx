"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/portfolio", label: "作品集" },
  { href: "/about", label: "关于我" },
  { href: "/blog", label: "博客" },
  { href: "/contact", label: "联系" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Hero pages with dark background — nav should start white
  const isDarkHero = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isLight = scrolled || !isDarkHero;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLight
            ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-[17px] font-semibold tracking-tight hover:opacity-70 transition-opacity ${
              isLight ? "text-[#1d1d1f]" : "text-white"
            }`}
          >
            商曦匀
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[14px] transition-colors ${
                    pathname === link.href
                      ? isLight
                        ? "text-[#1d1d1f] font-medium"
                        : "text-white font-medium"
                      : isLight
                      ? "text-[#6e6e73] hover:text-[#1d1d1f]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
              isLight
                ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                : "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
            }`}
          >
            合作洽谈
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isLight ? "text-[#1d1d1f]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-lg md:hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-[17px] py-1 transition-colors ${
                      pathname === link.href
                        ? "text-[#0071e3] font-medium"
                        : "text-[#1d1d1f]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#0071e3] text-white text-[14px] font-medium mt-2"
                >
                  合作洽谈
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
