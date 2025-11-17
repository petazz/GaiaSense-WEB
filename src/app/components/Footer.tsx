'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    producto: [
      { name: 'Características', href: '/features' },
      { name: 'Precios', href: '/contact' },
      { name: 'Demo', href: '/features' },
      { name: 'FAQ', href: '/about' }
    ],
    compañia: [
      { name: 'Sobre Nosotros', href: '/about' },
      { name: 'Equipo', href: '/about' },
      { name: 'Contacto', href: '/contact' },
      { name: 'Blog', href: '/' }
    ],
    legal: [
      { name: 'Privacidad', href: '/' },
      { name: 'Términos', href: '/' },
      { name: 'Cookies', href: '/' },
      { name: 'Licencias', href: '/' }
    ],
    social: [
      { name: 'Twitter', icon: '🐦', href: '#' },
      { name: 'Instagram', icon: '📷', href: '#' },
      { name: 'LinkedIn', icon: '💼', href: '#' },
      { name: 'YouTube', icon: '📺', href: '#' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                🌱
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                GaiaSense
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolucionando el cuidado de plantas con IoT e Inteligencia Artificial. 
              Tu asistente personal para un jardín más inteligente.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Compañía</h3>
            <ul className="space-y-3">
              {footerLinks.compañia.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Mantente Actualizado
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Recibe las últimas novedades sobre cuidado inteligente de plantas
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Suscribir
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} GaiaSense. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="text-green-400">🌿</span>
                Hecho con amor por el planeta
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}