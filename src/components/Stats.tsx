"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    number: 70,
    suffix: '%',
    label: 'Productivity Boost',
    color: 'primary-orange'
  },
  {
    number: 2,
    suffix: 'TB',
    label: 'Data Organized',
    color: 'accent-blue'
  },
  {
    number: 3,
    suffix: 'hrs',
    label: 'Time Saved Weekly',
    color: 'accent-teal'
  },
  {
    number: 60,
    prefix: '$',
    suffix: 'B',
    label: 'Market Size 2024',
    color: 'accent-amber'
  }
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-primary relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-primary-black flex items-center justify-center gap-1">
                    {stat.prefix}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      {stat.number}
                    </motion.span>
                    {stat.suffix}
                  </div>
                  <p className="text-primary-gray font-medium">{stat.label}</p>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 bg-${stat.color} rounded-full opacity-75`} />
                <div className={`absolute -bottom-1 -left-1 w-3 h-3 bg-${stat.color} rounded-full opacity-75`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 