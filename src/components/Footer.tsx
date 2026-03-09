import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Akash Translines</h3>
            <p className="text-gray-400 mb-4">
              Fleet Owners & Transport Contractors providing reliable transportation services across India.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:9632937999"
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/919632937999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('fleet')} className="text-gray-400 hover:text-white transition-colors">
                  Fleet
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Material Transportation</li>
              <li>Corporate Transport Contracts</li>
              <li>Tours & Travels</li>
              <li>Pan-India Coverage</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:9632937999" className="hover:text-white transition-colors">
                  9632937999
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:akashtranslines189@gmail.com" className="hover:text-white transition-colors break-all">
                  akashtranslines189@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  #216 'A', 2nd Floor,<br />
                  4th Main Road, 2nd Block,<br />
                  Nandini Layout, Bangalore – 560096
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Akash Translines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
