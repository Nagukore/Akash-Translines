import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Fleet', id: 'fleet' },
    { label: 'Locations', id: 'locations' },
    { label: 'Contact', id: 'contact' }
  ];

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <motion.header
      className="bg-white shadow-md fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Akash Translines</h1>
            <p className="text-xs sm:text-sm text-gray-600">Fleet Owners & Transport Contractors</p>
          </motion.div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ color: '#2563eb' }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <motion.a
            href="tel:9632937999"
            className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 lg:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={16} />
            <span className="hidden lg:inline">Call: 9632937999</span>
          </motion.a>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 py-3 space-y-1 max-h-96 overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors text-base"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="tel:9632937999"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-3"
                custom={navItems.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} />
                9632937999
              </motion.a>
              <motion.a
                href="tel:7090030800"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                custom={navItems.length + 1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} />
                7090030800
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
