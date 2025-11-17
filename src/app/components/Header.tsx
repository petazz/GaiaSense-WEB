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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
              🌱
            </div>
            <span className={`text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent ${
              scrolled ? '' : 'text-white'
            }`}>
              GaiaSense
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {['Inicio', 'Características', 'Nosotros', 'Contacto'].map((item, index) => {
              const href = item === 'Inicio' ? '/' : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
              return (
                <li key={index}>
                  <Link 
                    href={href}
                    className={`relative font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-green-600 after:to-emerald-500 after:transition-all after:duration-300 hover:after:w-full ${
                      scrolled 
                        ? 'text-gray-700 hover:text-green-600' 
                        : 'text-white hover:text-green-200'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Solicitar Demo
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <ul className="flex flex-col gap-4">
              {['Inicio', 'Características', 'Nosotros', 'Contacto'].map((item, index) => {
                const href = item === 'Inicio' ? '/' : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                return (
                  <li key={index}>
                    <Link 
                      href={href}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}