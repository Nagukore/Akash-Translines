import { Shield, Clock, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
    { icon: Shield, title: 'Safe & Reliable', subtitle: 'Trusted by multiple companies' },
    { icon: Clock, title: 'On-Time Delivery', subtitle: 'Timely commitment' },
    { icon: Users, title: 'Experienced Team', subtitle: 'Skilled drivers & staff' },
    { icon: TrendingUp, title: 'Pan-India Coverage', subtitle: 'Service across India' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/Logistic.png"
              alt="Logistics operations"
              className="rounded-lg shadow-xl w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Transportation Partner
            </h3>
            <motion.p
              className="text-gray-600 text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Akash Translines operates a reliable fleet of vehicles for transportation and travel purposes.
              The company helps businesses transport materials safely and efficiently from one location to another across India.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Akash Translines is tied up with multiple companies for long-term transportation contracts and
              is known for safe handling, on-time delivery, and dependable service.
            </motion.p>

            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="w-full sm:w-1/2 flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors flex-shrink-0">
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
