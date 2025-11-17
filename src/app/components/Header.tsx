'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          🌱 GaiaSense
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-green-200 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-green-200 transition">
              Características
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-200 transition">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-200 transition">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
