import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">Akash Translines</h1>
            <p className="text-sm text-gray-600">Fleet Owners & Transport Contractors</p>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('fleet')} className="text-gray-700 hover:text-blue-600 font-medium">
              Fleet
            </button>
            <button onClick={() => scrollToSection('locations')} className="text-gray-700 hover:text-blue-600 font-medium">
              Locations
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </button>
          </nav>

          <a
            href="tel:9632937999"
            className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700">
              Services
            </button>
            <button onClick={() => scrollToSection('fleet')} className="block w-full text-left py-2 text-gray-700">
              Fleet
            </button>
            <button onClick={() => scrollToSection('locations')} className="block w-full text-left py-2 text-gray-700">
              Locations
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">
              Contact
            </button>
            <a
              href="tel:9632937999"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
