'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      console.log('Formulario enviado:', form);
      setSubmitted(true);
      setLoading(false);
      setForm({ name: '', email: '', subject: 'general', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hola@gaiasense.com',
      action: 'Enviar email',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+34 123 456 789',
      action: 'Abrir chat',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@GaiaSense',
      action: 'Seguirnos',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: '📍',
      title: 'Oficina',
      value: 'Madrid, España',
      action: 'Ver mapa',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const faqs = [
    {
      q: '¿Cuánto tiempo tarda la entrega?',
      a: 'Enviamos en 24-48h a toda España. Internacional 5-7 días laborables.'
    },
    {
      q: '¿Funciona con cualquier tipo de planta?',
      a: 'Sí, GaiaSense es compatible con más de 10,000 especies diferentes.'
    },
    {
      q: '¿Necesito suscripción mensual?',
      a: 'No, el dispositivo incluye acceso gratuito de por vida a todas las funciones.'
    },
    {
      q: '¿Qué garantía tienen?',
      a: '2 años de garantía completa y 30 días de devolución sin preguntas.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 pt-12">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ESTAMOS AQUÍ PARA TI
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Hablemos de tus <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Plantas</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes preguntas? Nuestro equipo está listo para ayudarte en tu viaje hacia un jardín más inteligente
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-3">{method.value}</p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                {method.action} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            {submitted && (
              <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold">¡Mensaje enviado con éxito!</p>
                  <p className="text-sm">Te responderemos en menos de 24 horas</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Asunto *
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition"
                >
                  <option value="general">Consulta General</option>
                  <option value="demo">Solicitar Demo</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="ventas">Ventas</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⚙️</span>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          </div>

          {/* Info & FAQs */}
          <div>
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Respuesta Rápida</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <span>Respondemos en menos de 24 horas</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <span>Soporte en español e inglés</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <span>Chat en vivo disponible</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer font-bold text-gray-900 hover:text-green-600 transition">
                      {faq.q}
                      <span className="text-xl group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-3 text-gray-600 pl-4 border-l-2 border-green-200">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visítanos</h2>
            <p className="text-gray-600 text-lg">
              Estamos en el corazón de Madrid, siempre listos para una conversación sobre plantas y tecnología
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Oficinas GaiaSense</h3>
            <p className="text-gray-600 mb-1">Calle de la Innovación, 42</p>
            <p className="text-gray-600 mb-4">28001 Madrid, España</p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Ver en Google Maps
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}