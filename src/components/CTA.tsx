"use client";

import { motion } from 'framer-motion';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';

const benefits = [
  "30-day free trial",
  "No credit card required",
  "Full feature access",
  "24/7 support"
];

export default function CTA() {
  return (
    <section className="py-20 bg-primary-light relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />
      
      <div className="container mx-auto px-6 relative">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-primary-black">
                  Ready to Get <span className="text-primary-orange">Started?</span>
                </h2>
                <p className="text-primary-gray text-lg">
                  Join thousands of professionals who are already using SmartSpace AI to transform their digital workspace.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary-orange/10 flex items-center justify-center">
                        <IconCheck className="w-3 h-3 text-primary-orange" />
                      </div>
                      <span className="text-primary-gray">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-primary-orange text-white font-semibold hover:shadow-orange transition-all duration-300 flex items-center gap-2"
                >
                  Start Free Trial
                  <IconArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 bg-gradient-primary p-12 lg:p-16 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Add your illustration or image here */}
                <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 