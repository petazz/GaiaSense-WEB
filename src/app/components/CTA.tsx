'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-10 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full opacity-10 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-10 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="text-7xl animate-bounce-slow">🌱</div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            ¿Listo para Revolucionar el
            <br />
            <span className="relative inline-block">
              Cuidado de tus Plantas?
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-400 opacity-50 -rotate-1"></div>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            Únete a más de <span className="font-bold text-white">1,000+ jardineros</span> que ya están usando GaiaSense para mantener sus plantas sanas y felices.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-lg p-2 rounded-full border border-white/20">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="flex-1 bg-white/90 text-gray-900 px-6 py-3 rounded-full outline-none placeholder-gray-500"
              />
              <button
                onClick={handleSubmit}
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Obtener Early Access
              </button>
            </div>
            <p className="text-green-100 text-sm mt-3">
              🎁 Los primeros 100 usuarios reciben <span className="font-bold text-white">20% de descuento</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="group bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Solicitar Demo Personalizada</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <Link
              href="/features"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Ver Características
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-90">
            <div className="flex items-center gap-2 text-white">
              <div className="text-2xl">✓</div>
              <span className="text-sm font-medium">Envío Gratis</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="text-2xl">✓</div>
              <span className="text-sm font-medium">Garantía 30 días</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="text-2xl">✓</div>
              <span className="text-sm font-medium">Soporte 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="text-2xl">⭐</div>
              <span className="text-sm font-medium">4.9/5 de 500+ reseñas</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}