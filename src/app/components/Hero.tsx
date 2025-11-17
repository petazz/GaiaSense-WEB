'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-green-900 mb-6">
          Tu Asistente de IA para el Cuidado de Plantas
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          GaiaSense es un sensor inteligente que monitorea la salud de tus plantas en tiempo real. Recibe consejos personalizados de IA y crea una amistad única con cada una de tus plantas, como un Tamagotchi con vida real.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Comenzar Ahora
          </Link>
          <Link
            href="/features"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition"
          >
            Conocer Más
          </Link>
        </div>
      </div>
    </section>
  );
}
