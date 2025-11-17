export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Conecta el Sensor',
      description: 'Clava el sensor GaiaSense en la tierra de tu maceta.'
    },
    {
      number: '2',
      title: 'Descarga la App',
      description: 'Instala la aplicación Android y conecta tu sensor.'
    },
    {
      number: '3',
      title: 'Recibe Datos',
      description: 'El sensor envía mediciones de humedad en tiempo real.'
    },
    {
      number: '4',
      title: 'IA te Asesora',
      description: 'Nuestra IA interpreta los datos y te da consejos personalizados.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          ¿Cómo Funciona?
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
