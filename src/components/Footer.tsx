import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Fleet', id: 'fleet' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Material Transportation',
    'Corporate Transport Contracts',
    'Tours & Travels',
    'Pan-India Coverage'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <motion.div
          className="flex flex-wrap gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="w-full sm:w-1/2 md:w-1/4">
            <motion.h3
              className="text-xl sm:text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Akash Translines
            </motion.h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Fleet Owners & Transport Contractors providing reliable transportation services across India.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="tel:9632937999"
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Call us"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/919632937999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start gap-2 text-gray-400 group text-sm sm:text-base"
                whileHover={{ paddingLeft: 8 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} className="mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a href="tel:9632937999" className="hover:text-white transition-colors group-hover:text-blue-400">
                  9632937999
                </a>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 text-gray-400 group text-sm sm:text-base"
                whileHover={{ paddingLeft: 8 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} className="mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a
                  href="mailto:akashtranslines189@gmail.com"
                  className="hover:text-white transition-colors break-all group-hover:text-blue-400"
                >
                  akashtranslines189@gmail.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-start gap-2 text-gray-400 group text-sm sm:text-base"
                whileHover={{ paddingLeft: 8 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={18} className="mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">
                  #216 'A', 2nd Floor,<br />
                  4th Main Road, 2nd Block,<br />
                  Nandini Layout, Bangalore – 560096
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Akash Translines. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
