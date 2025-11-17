export default function Features() {
  const features = [
    {
      icon: '💧',
      title: 'Monitoreo de Humedad',
      description: 'Sensor inteligente que mide la humedad del suelo en tiempo real.'
    },
    {
      icon: '🤖',
      title: 'IA Personalizable',
      description: 'Personaliza cómo tu IA se comunica con tus plantas, como tu mejor amiga.'
    },
    {
      icon: '📱',
      title: 'App Android',
      description: 'Recibe notificaciones y consejos en tu teléfono instantáneamente.'
    },
    {
      icon: '💬',
      title: 'Lenguaje Humano',
      description: 'La IA traduce datos técnicos a consejos fáciles de entender.'
    },
    {
      icon: '🎮',
      title: 'Tamagotchi Real',
      description: 'Crea una conexión emocional única con tus plantas mientras las cuidas.'
    },
    {
      icon: '🌿',
      title: 'Cuidado Óptimo',
      description: 'Recibe recomendaciones específicas para cada tipo de planta.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Características Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
