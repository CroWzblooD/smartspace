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
    title: "Voice-Powered Search",
    description: "Simply ask 'Find my client presentation' and AI instantly searches across all connected devices",
    category: "Smart Search"
  },
  {
    icon: IconSearch,
    title: "Smart Organization",
    description: "Automatically categorizes 50,000+ photos and 1,000+ documents, detecting duplicates instantly",
    category: "Organization"
  },
  {
    icon: IconLogicAnd,
    title: "Real-time Assistant",
    description: "Access important files within seconds - whether you're in a meeting, library, or on the go",
    category: "Productivity"
  },
  {
    icon: IconDevices,
    title: "Multi-Device Sync",
    description: "Seamlessly connect 3+ devices and 5+ cloud accounts including Google Drive and OneDrive",
    category: "Integration"
  },
  {
    icon: IconChartBar,
    title: "Storage Optimization",
    description: "Free up to 40% storage space with automatic duplicate detection and low-quality file management",
    category: "Storage"
  },
  {
    icon: IconShieldLock,
    title: "Privacy Protection",
    description: "Secure sensitive files with Face ID and additional security layers for personal content",
    category: "Security"
  },
  {
    icon: IconCloud,
    title: "Smart Processing",
    description: "Intel NPU powered on-device AI processing ensuring maximum privacy and speed",
    category: "Performance"
  },
  {
    icon: IconSpeedboat,
    title: "Instant Results",
    description: "70% faster file searches across all devices and cloud storage with millisecond response",
    category: "Speed"
  },
  {
    icon: IconFingerprint,
    title: "Context Understanding",
    description: "Understands natural commands like 'Show beach vacation photos' or 'Find last month's tax document'",
    category: "AI Intelligence"
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