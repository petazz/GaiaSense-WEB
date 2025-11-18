'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const team = [
    {
      name: 'María González',
      role: 'CEO & Fundadora',
      emoji: '👩‍💼',
      bio: 'Ingeniera Agrónoma con pasión por la tecnología'
    },
    {
      name: 'Carlos Ruiz',
      role: 'CTO',
      emoji: '👨‍💻',
      bio: 'Experto en IoT e Inteligencia Artificial'
    },
    {
      name: 'Ana Martínez',
      role: 'Head of Design',
      emoji: '🎨',
      bio: 'Diseñadora UX/UI especializada en apps móviles'
    },
    {
      name: 'Luis Torres',
      role: 'Botánico Principal',
      emoji: '🌿',
      bio: 'PhD en Botánica con 15 años de experiencia'
    }
  ];

  const values = [
    {
      icon: '🌍',
      title: 'Sostenibilidad',
      description: 'Comprometidos con el medio ambiente en cada decisión'
    },
    {
      icon: '🚀',
      title: 'Innovación',
      description: 'Pioneros en tecnología verde aplicada'
    },
    {
      icon: '❤️',
      title: 'Pasión',
      description: 'Amamos las plantas y la tecnología por igual'
    },
    {
      icon: '🤝',
      title: 'Comunidad',
      description: 'Construimos juntos un futuro más verde'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20 pt-12">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              NUESTRA HISTORIA
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Sobre <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">GaiaSense</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nacimos de la pasión por la tecnología y el amor por las plantas. 
            Creemos que la inteligencia artificial debe servir para acercarnos a la naturaleza, no alejarnos.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl opacity-10">🌱</div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-xl leading-relaxed max-w-3xl">
              Conectar a las personas con la naturaleza a través de la tecnología inteligente, 
              permitiendo que cada persona sea un cuidador experto de plantas, sin importar su nivel de experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform">
                {member.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1,000+', label: 'Usuarios Activos' },
              { number: '5,000+', label: 'Plantas Cuidadas' },
              { number: '98%', label: 'Satisfacción' },
              { number: '24/7', label: 'Soporte' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">¿Quieres Unirte a Nuestra Misión?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estamos siempre buscando personas apasionadas por la tecnología y la naturaleza
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Ver Oportunidades
          </button>
        </div>
      </section>
    </div>
  );
}