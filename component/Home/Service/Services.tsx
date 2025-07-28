'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

const services = [
  { title: 'Custom Desktop Software', description: 'We build powerful, user-friendly desktop applications tailored to your business needs using modern technologies.' },
  { title: 'Mobile App Development', description: 'Cross-platform mobile apps for Android and iOS with sleek UI and reliable performance.' },
  { title: 'Web Development', description: 'Responsive and modern websites, from portfolios to complex web apps, built with performance and scalability in mind.' },
  { title: 'POS System', description: 'Efficient Point of Sale systems for retail and restaurants, including inventory and billing features.' },
  { title: 'ERP System', description: 'Comprehensive ERP solutions to streamline operations, manage resources, and improve productivity.' },
  { title: 'IT Solutions', description: 'Complete IT services including consulting, system integration, and technical support for your business.' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  return (
    <section id='service' className='py-16 bg-gray-200'>
      <div className='max-w-6xl mx-auto px-4 lg:mt-5'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>Our Services</h2>
        <p className='text-center text-gray-600 mb-12'>
          We provide a wide range of custom software and IT services tailored to meet your business needs.
        </p>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {services.map((service, i) => (
            <motion.div
              key={i}
              className='bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300'
              initial="hidden"
              whileInView="visible"
              //viewport={{ once: true, amount: 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // 👈 run every time it scrolls into view
              custom={i}
              variants={cardVariants}
            >
              <h3 className='text-xl font-semibold text-emerald-600 mb-2'>{service.title}</h3>
              <p className='text-gray-700'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
