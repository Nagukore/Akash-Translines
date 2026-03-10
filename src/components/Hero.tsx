import { Phone, MessageCircle, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex justify-center mb-4 sm:mb-6" variants={itemVariants}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Truck size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight"
            variants={itemVariants}
          >
            Akash Translines
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-blue-300 font-semibold mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Fleet Owners & Transport Contractors
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2"
            variants={itemVariants}
          >
            Delivering reliable transportation solutions across India with a
            modern fleet, professional drivers, and a commitment to on-time,
            safe, and efficient service.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center px-2"
            variants={itemVariants}
          >
            <motion.a
              href="tel:9632937999"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              Call Now
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.button>

            <motion.a
              href="https://wa.me/919632937999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}