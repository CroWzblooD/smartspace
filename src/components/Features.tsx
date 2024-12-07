"use client";

import { motion } from 'framer-motion';
import { 
  IconBrain, 
  IconSearch, 
  IconShieldLock, 
  IconDevices, 
  IconCloud, 
  IconLogicAnd,
  IconSpeedboat,
  IconChartBar,
  IconFingerprint 
} from '@tabler/icons-react';

const features = [
  {
    icon: IconBrain,
    title: "Smart Organization",
    description: "AI-powered file categorization and tagging",
    category: "Intelligence"
  },
  {
    icon: IconSearch,
    title: "Instant Search",
    description: "Find any file in milliseconds with smart search",
    category: "Speed"
  },
  {
    icon: IconShieldLock,
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption for your data",
    category: "Security"
  },
  {
    icon: IconSpeedboat,
    title: "Lightning Fast",
    description: "Optimized performance across all devices",
    category: "Speed"
  },
  {
    icon: IconChartBar,
    title: "Smart Analytics",
    description: "Insights into your productivity patterns",
    category: "Intelligence"
  },
  {
    icon: IconFingerprint,
    title: "Biometric Access",
    description: "Secure access with fingerprint and Face ID",
    category: "Security"
  },
  {
    icon: IconDevices,
    title: "Cross-Platform",
    description: "Seamless sync across all your devices",
    category: "Access"
  },
  {
    icon: IconCloud,
    title: "Cloud Power",
    description: "Backed by Intel's robust cloud infrastructure",
    category: "Performance"
  },
  {
    icon: IconLogicAnd,
    title: "Auto Enhance",
    description: "Smart optimization of stored content",
    category: "Intelligence"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            Cutting-Edge <span className="text-primary-orange">Features</span>
          </h2>
          <p className="text-primary-gray max-w-2xl mx-auto">
            Powered by Intel's latest technology for unmatched performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 to-accent-blue/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary-orange bg-primary-orange/10 px-2 py-1 rounded-full">
                      {feature.category}
                    </span>
                    <h3 className="text-lg font-semibold text-primary-black mt-2 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-primary-gray text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 