'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          ¿Listo para cuidar tus plantas de forma inteligente?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Únete a la comunidad de GaiaSense y descubre una nueva forma de conectar con tus plantas.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-green-600 px-10 py-3 rounded-lg font-bold hover:bg-green-50 transition text-lg"
        >
          Solicita tu GaiaSense Hoy
        </Link>
      </div>
    </section>
  );
}
