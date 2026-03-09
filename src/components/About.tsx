import { Shield, Clock, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
          <img
            src="/Logistic.png"
            alt="Logistics operations"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Transportation Partner
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Akash Translines operates a reliable fleet of vehicles for transportation and travel purposes.
              The company helps businesses transport materials safely and efficiently from one location to another across India.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Akash Translines is tied up with multiple companies for long-term transportation contracts and
              is known for safe handling, on-time delivery, and dependable service.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Safe & Reliable</h4>
                  <p className="text-sm text-gray-600">Trusted by multiple companies</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">On-Time Delivery</h4>
                  <p className="text-sm text-gray-600">Timely commitment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experienced Team</h4>
                  <p className="text-sm text-gray-600">Skilled drivers & staff</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pan-India Coverage</h4>
                  <p className="text-sm text-gray-600">Service across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
