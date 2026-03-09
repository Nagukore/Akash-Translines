import { MapPin } from 'lucide-react';

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Locations</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive transportation services across the country
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <MapPin className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">All Over India</h3>
                  <p className="text-gray-600">Nationwide Coverage</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Akash Translines provides comprehensive transportation services across India.
                From metropolitan cities to remote locations, we ensure your cargo reaches its
                destination safely and on time.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Interstate transportation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>City-to-city logistics</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Remote area delivery</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Long-distance tours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="India map logistics"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Need transportation services in your area?
          </p>
          <a
            href="tel:9632937999"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
