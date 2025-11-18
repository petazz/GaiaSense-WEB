'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/caracteristicas', label: 'Características' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-green-600/95 to-emerald-600/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-green-600 to-emerald-600'
      } text-white`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-80 transition group"
          >
            <div className="text-3xl transform group-hover:scale-110 transition-transform">
              🌱
            </div>
            <span className="text-2xl font-bold">GaiaSense</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-semibold transition-all duration-300 hover:text-green-200 ${
                    pathname === link.href 
                      ? 'text-yellow-300 border-b-2 border-yellow-300 pb-1' 
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl focus:outline-none hover:scale-110 transition-transform"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 font-semibold transition hover:text-green-200 ${
                  pathname === link.href ? 'text-yellow-300' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}