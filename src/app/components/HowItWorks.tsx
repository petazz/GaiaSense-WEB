'use client';

import { useState } from 'react';

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: '💧',
      title: 'Monitoreo de Humedad',
      description: 'Sensor capacitivo de última generación que mide la humedad del suelo con precisión milimétrica en tiempo real.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🤖',
      title: 'IA Personalizable',
      description: 'Configura la personalidad de tu asistente: desde científica formal hasta tu mejor amiga. Tú decides el tono.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'App Android Nativa',
      description: 'Recibe notificaciones push instantáneas, gráficas interactivas y consejos personalizados directo en tu móvil.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '💬',
      title: 'Lenguaje Natural',
      description: 'Olvida datos técnicos complejos. La IA traduce toda la información a conversaciones fáciles y amigables.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🎮',
      title: 'Tamagotchi Vegetal',
      description: 'Crea vínculos emocionales reales. Cada planta tiene personalidad única y evoluciona con tu cuidado diario.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '🌿',
      title: 'Cuidado Inteligente',
      description: 'Algoritmos avanzados que aprenden de tus plantas y te dan recomendaciones específicas para cada especie.',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🌱</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌿</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              CARACTERÍSTICAS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Tecnología de
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Vanguardia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combinamos IoT, Inteligencia Artificial y diseño intuitivo para revolucionar el cuidado de plantas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-5">
                <div className={`text-6xl transform transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                }`}>
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className={`mt-4 flex items-center gap-2 text-green-600 font-semibold transition-all duration-300 ${
                hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <span>Saber más</span>
                <span>→</span>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            ¿Quieres ver todas las características en acción?
          </p>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explorar Características Completas
          </button>
        </div>
      </div>
    </section>
  );
}