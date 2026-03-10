import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Locations() {
  const locations = [
    'Interstate transportation',
    'City-to-city logistics',
    'Remote area delivery',
    'Long-distance tours',
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Service Locations
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive transportation services across the country
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-blue-100 p-4 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="text-blue-600" size={32} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">All Over India</h3>
                  <p className="text-gray-600">Nationwide Coverage</p>
                </div>
              </motion.div>

              <motion.p
                className="text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Akash Translines provides comprehensive transportation services across India.
                From metropolitan cities to remote locations, we ensure your cargo reaches its
                destination safely and on time.
              </motion.p>

              <div className="space-y-3">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>{location}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/india-logistics.jpg"
              alt="India map logistics"
              className="rounded-lg shadow-xl w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"
              initial={{ opacity: 0.2 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Need transportation services in your area?
            </p>
          </div>
          <motion.a
            href="tel:9632937999"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call: 9632937999
          </motion.a>
          <motion.a
            href="tel:7090030800"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call: 7090030800
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
