import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-900 mb-8">
            Sobre GaiaSense
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              GaiaSense nace de la pasión por la tecnología y el amor por las plantas. Creemos que la inteligencia artificial debe servir para acercarnos a la naturaleza, no alejarnos.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nuestro equipo de desarrolladores y expertos en botánica han trabajado juntos para crear una solución innovadora que hace el cuidado de plantas accesible y divertido para todos.
            </p>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700">
              Conectar a las personas con la naturaleza a través de la tecnología inteligente, permitiendo que cada persona sea un cuidador experto de plantas, sin importar su nivel de experiencia.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
