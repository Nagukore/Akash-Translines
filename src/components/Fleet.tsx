import { motion } from 'framer-motion';

export default function Fleet() {
  const vehicles = [
    {
      name: 'Cargo Trucks',
      image: '/cargo-truck.jpg',
      description: 'Heavy-duty cargo trucks for large-scale material transportation'
    },
    {
      name: 'Container Trucks',
      image: '/container-truck.jpg',
      description: 'Secure container trucks for safe and weather-proof cargo delivery'
    },
    {
      name: 'Tempo Travellers',
      image: '/tempo-traveller.jpg',
      description: 'Comfortable tempo travellers for group travel and tours'
    },
    {
      name: 'Tourist Buses',
      image: '/tourist-bus.jpg',
      description: 'Modern tourist buses with comfortable seating and amenities'
    }
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="fleet" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Fleet
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Well-maintained vehicles ready to serve your transportation needs
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 sm:gap-5 md:gap-6 mb-8 md:mb-12 justify-center sm:justify-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 sm:px-0 bg-white rounded-lg shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-gray-200">
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-4 sm:p-5 md:p-4">
                <h3 className="text-base sm:text-lg md:text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {vehicle.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-sm text-gray-600 line-clamp-3">
                  {vehicle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 md:p-6 rounded-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Our Fleet?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3 md:gap-3 text-sm sm:text-base text-gray-700">
            {[
              'Pan-India service coverage',
              'Safe and reliable transportation',
              'Experienced drivers and staff',
              'Trusted by multiple companies',
              'Timely delivery commitment',
              'Well-maintained vehicles',
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2 p-1 rounded hover:bg-blue-100 transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 flex-shrink-0 text-lg">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
