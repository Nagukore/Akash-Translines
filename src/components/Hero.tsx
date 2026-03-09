import { Phone, MessageCircle, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Truck size={42} className="text-blue-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Akash Translines
          </h1>

          <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">
            Fleet Owners & Transport Contractors
          </p>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Delivering reliable transportation solutions across India with a
            modern fleet, professional drivers, and a commitment to on-time,
            safe, and efficient service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="tel:9632937999"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg font-semibold shadow-xl transition-all hover:scale-105"
            >
              <Phone size={20} />
              Call Now
            </a>

            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-xl text-lg font-semibold shadow-xl transition-all hover:scale-105"
            >
              Get a Free Quote
            </button>

            <a
              href="https://wa.me/919632937999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl text-lg font-semibold shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}