import { Truck, Building2, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Material Transportation',
      description: 'Safe and efficient transportation of materials from one location to another across India. We handle your cargo with care and ensure secure delivery.',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Building2,
      title: 'Corporate Transport Contracts',
      description: 'Long-term transportation contracts for businesses. Reliable fleet management and dedicated service for your company\'s logistics needs.',
      image: '/container.png'
    },
    {
      icon: MapPin,
      title: 'Tours & Travels',
      description: 'Comfortable and safe travel solutions for groups and individuals. Modern tourist buses and tempo travellers for your travel requirements.',
      image: '/tours.png'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
