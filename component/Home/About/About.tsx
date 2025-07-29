'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

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

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:mt-5">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-4">About Us</h2>
        <p className="text-center text-gray-600 mb-12">
          At SoftwoGate Solutions, we are committed to delivering innovative, scalable, and intelligent software that drives business success.
        </p>

        {/* Cards: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <motion.div
            className="bg-gray-100 shadow-md rounded-xl p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold text-emerald-600 mb-3">Our Mission</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To empower businesses and individuals with smart, user-centric software solutions — enabling them to work more efficiently, scale faster, and succeed digitally.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-gray-100 shadow-md rounded-xl p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={1}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold text-emerald-600 mb-3">Our Vision</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To become a leading force in the software industry by delivering innovative, reliable, and scalable solutions that transform businesses across Sri Lanka and beyond.
            </p>
          </motion.div>
        </div>

        {/* Company Background */}
        <motion.div
          className="mt-12 bg-white shadow-sm rounded-xl p-6 border border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={2}
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Who We Are</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            SoftwoGate Solutions is a professional software development brand backed by a dedicated team of skilled developers. We specialize in building custom digital solutions—including desktop applications, mobile apps, websites, POS systems, and ERP platforms. Our focus is on delivering innovative, user-friendly, and efficient software that empowers businesses to thrive.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
