export default function Fleet() {
  const vehicles = [
    {
      name: 'Cargo Trucks',
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Heavy-duty cargo trucks for large-scale material transportation'
    },
    {
      name: 'Container Trucks',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Secure container trucks for safe and weather-proof cargo delivery'
    },
    {
      name: 'Tempo Travellers',
      image: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comfortable tempo travellers for group travel and tours'
    },
    {
      name: 'Tourist Buses',
      image: 'https://images.pexels.com/photos/1141181/pexels-photo-1141181.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern tourist buses with comfortable seating and amenities'
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Well-maintained vehicles ready to serve your transportation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {vehicle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Fleet?</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span>Pan-India service coverage</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span>Safe and reliable transportation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span>Experienced drivers and staff</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span>Trusted by multiple companies</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span>Timely delivery commitment</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span>Well-maintained vehicles</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
