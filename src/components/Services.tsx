import { Truck, Building2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Material Transportation',
      description: 'Safe and efficient transportation of materials from one location to another across India. We handle your cargo with care and ensure secure delivery.',
      image: '/material-transport.jpg'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6 sm:gap-6 md:gap-7 lg:gap-8 justify-center sm:justify-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="w-full sm:w-1/3 px-2 sm:px-0 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group"
                variants={itemVariants}
                whileHover={{ y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </motion.div>
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <motion.div
                    className="bg-blue-100 w-14 md:w-16 lg:w-20 h-14 md:h-16 lg:h-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="text-blue-600" size={28} />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
