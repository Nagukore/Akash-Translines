import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '9632937999 / 7090030800',
      link: 'tel:9632937999',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'akashtranslines189@gmail.com',
      link: 'mailto:akashtranslines189@gmail.com',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      content: '#216 \'A\', 2nd Floor, 4th Main Road, 2nd Block, Nandini Layout, Bangalore – 560096',
      link: null,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us on WhatsApp',
      link: 'https://wa.me/919632937999',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
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
            Contact Us
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
            Get in touch with us for all your transportation needs
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Get In Touch</h3>

            <motion.div className="space-y-6 mb-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`${info.bgColor} p-3 rounded-lg hover:scale-110 transition-transform cursor-pointer flex-shrink-0`}
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className={info.iconColor} size={24} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h4>
                      {info.link ? (
                        info.link.startsWith('https') ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${info.iconColor} hover:underline break-all text-sm sm:text-lg`}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <a href={info.link} className={`${info.iconColor} hover:underline text-sm sm:text-lg`}>
                            {info.content}
                          </a>
                        )
                      ) : (
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="bg-gray-100 rounded-lg overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.98!2d77.530769!3d13.018559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2z13.018559%2C77.530769!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Send us a Message</h3>
            <motion.form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-7" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg">
                  Full Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 sm:py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm sm:text-base md:text-lg"
                  placeholder="Enter your name"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg">
                  Email Address *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Phone Number *
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="Enter your phone number"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your requirements"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </motion.div>

              {submitted && (
                <motion.div
                  className="bg-green-50 border border-green-200 text-green-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Thank you for contacting us! We will get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
