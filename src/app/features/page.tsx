import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Features() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-900 mb-8">
            Características Completas
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-green-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                💧 Sensor Avanzado
              </h2>
              <p className="text-gray-700">
                Nuestro sensor de humedad utiliza tecnología capacitiva de última generación para medir con precisión la humedad del suelo.
              </p>
            </div>
            <div className="border border-green-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                🤖 IA Conversacional
              </h2>
              <p className="text-gray-700">
                Personaliza completamente cómo tu IA se comunica: desde formal hasta como tu mejor amiga planta.
              </p>
            </div>
            <div className="border border-green-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                ⚡ Conectividad IoT
              </h2>
              <p className="text-gray-700">
                Conexión WiFi integrada para sincronización automática de datos con tu app móvil.
              </p>
            </div>
            <div className="border border-green-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                📊 Estadísticas Detalladas
              </h2>
              <p className="text-gray-700">
                Visualiza gráficas históricas del cuidado de tus plantas y aprende patrones.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
