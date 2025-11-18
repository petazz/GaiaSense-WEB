'use client';

import { useState, useEffect } from 'react';

export default function Features() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('hardware');

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = {
    hardware: [
      {
        icon: '💧',
        title: 'Sensor Capacitivo Avanzado',
        description: 'Tecnología capacitiva de última generación que mide la humedad del suelo con precisión milimétrica.',
        specs: ['Rango: 0-100%', 'Precisión: ±2%', 'Respuesta: < 1s']
      },
      {
        icon: '📡',
        title: 'Conectividad WiFi',
        description: 'Módulo WiFi integrado para sincronización automática en tiempo real con la nube.',
        specs: ['2.4GHz & 5GHz', 'Alcance: 50m', 'Cifrado WPA3']
      },
      {
        icon: '🔋',
        title: 'Batería de Larga Duración',
        description: 'Batería recargable que dura hasta 6 meses con una sola carga.',
        specs: ['Capacidad: 2000mAh', 'Carga: USB-C', 'Duración: 6 meses']
      },
      {
        icon: '🌡️',
        title: 'Sensores Múltiples',
        description: 'Temperatura, luz ambiental y conductividad del suelo en un solo dispositivo.',
        specs: ['Temperatura: -10°C a 50°C', 'Luz: 0-100k lux', 'pH: 3-10']
      }
    ],
    software: [
      {
        icon: '🤖',
        title: 'IA Personalizable',
        description: 'Configura la personalidad de tu asistente: desde científica formal hasta tu mejor amiga.',
        specs: ['GPT-4 Powered', '10+ Personalidades', 'Aprendizaje continuo']
      },
      {
        icon: '📊',
        title: 'Analytics Avanzados',
        description: 'Visualiza gráficas históricas detalladas del cuidado de tus plantas y aprende patrones.',
        specs: ['Histórico ilimitado', 'Predicciones IA', 'Exportar datos']
      },
      {
        icon: '🔔',
        title: 'Notificaciones Inteligentes',
        description: 'Alertas personalizadas en el momento exacto cuando tu planta lo necesita.',
        specs: ['Push notifications', 'Email opcional', 'Horarios personalizados']
      },
      {
        icon: '📱',
        title: 'App Multiplataforma',
        description: 'Aplicación nativa para Android con soporte futuro para iOS y web.',
        specs: ['Android 8+', 'Material Design', 'Modo oscuro']
      }
    ],
    ai: [
      {
        icon: '🎭',
        title: 'Personalidades Únicas',
        description: 'Elige cómo tu IA se comunica: científica, amigable, divertida o motivacional.',
        specs: ['10+ estilos', 'Personalización total', 'Cambios en tiempo real']
      },
      {
        icon: '🧠',
        title: 'Aprendizaje Automático',
        description: 'La IA aprende de tus hábitos y se adapta a tu estilo de jardinería.',
        specs: ['Reconocimiento de patrones', 'Sugerencias adaptativas', 'Mejora continua']
      },
      {
        icon: '💬',
        title: 'Chat Conversacional',
        description: 'Pregunta cualquier cosa sobre el cuidado de tus plantas en lenguaje natural.',
        specs: ['24/7 disponible', 'Multilenguaje', 'Contexto persistente']
      },
      {
        icon: '🎮',
        title: 'Gamificación',
        description: 'Sistema de logros, niveles y recompensas que hace el cuidado más divertido.',
        specs: ['50+ logros', 'Sistema de niveles', 'Badges exclusivos']
      }
    ]
  };

  const tabs = [
    { id: 'hardware', label: 'Hardware', icon: '⚙️' },
    { id: 'software', label: 'Software', icon: '💻' },
    { id: 'ai', label: 'Inteligencia Artificial', icon: '🤖' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 pt-12">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              CARACTERÍSTICAS COMPLETAS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Tecnología <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">de Vanguardia</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas saber sobre las capacidades de GaiaSense
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features[activeTab as keyof typeof features].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex flex-wrap gap-2">
                  {feature.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          GaiaSense vs Competencia
        </h2>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Característica</th>
                <th className="px-6 py-4 text-center">GaiaSense</th>
                <th className="px-6 py-4 text-center">Competidor A</th>
                <th className="px-6 py-4 text-center">Competidor B</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'IA Personalizable', gs: '✅', a: '❌', b: '❌' },
                { feature: 'Chat Conversacional', gs: '✅', a: '⚠️', b: '❌' },
                { feature: 'Múltiples Sensores', gs: '✅', a: '✅', b: '⚠️' },
                { feature: 'Batería 6 meses', gs: '✅', a: '❌', b: '✅' },
                { feature: 'App Android/iOS', gs: '✅', a: '✅', b: '✅' },
                { feature: 'Gamificación', gs: '✅', a: '❌', b: '❌' }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 text-center text-2xl">{row.gs}</td>
                  <td className="px-6 py-4 text-center text-2xl">{row.a}</td>
                  <td className="px-6 py-4 text-center text-2xl">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Empezar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya están revolucionando el cuidado de sus plantas
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Solicitar Demo Gratis
          </button>
        </div>
      </section>
    </div>
  );
}