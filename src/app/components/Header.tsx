'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-green-600/95 to-emerald-600/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-green-600 to-emerald-600'
      } text-white`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition">
          🌱 GaiaSense
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link
              href="/"
              className="hover:text-green-200 transition font-semibold"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/caracteristicas"
              className="hover:text-green-200 transition font-semibold"
            >
              Características
            </Link>
          </li>
          <li>
            <Link
              href="/nosotros"
              className="hover:text-green-200 transition font-semibold"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:text-green-200 transition font-semibold"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-green-600 to-emerald-700 px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block hover:text-green-200 transition font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/caracteristicas"
            className="block hover:text-green-200 transition font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Características
          </Link>
          <Link
            href="/nosotros"
            className="block hover:text-green-200 transition font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="block hover:text-green-200 transition font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
