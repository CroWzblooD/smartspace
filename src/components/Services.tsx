"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  IconBriefcase, 
  IconSchool, 
  IconHome, 
  IconPalette,
  IconArrowRight,
  IconCheck 
} from '@tabler/icons-react';

const services = [
  {
    icon: IconBriefcase,
    title: "Business",
    description: "Enterprise solutions for teams and organizations",
    features: ["Team Collaboration", "Document Management", "Analytics Dashboard", "API Access"],
    color: "primary-orange"
  },
  {
    icon: IconSchool,
    title: "Education",
    description: "Smart organization for academic excellence",
    features: ["Research Tools", "Citation Manager", "Study Planner", "Resource Library"],
    color: "accent-blue"
  },
  {
    icon: IconHome,
    title: "Personal",
    description: "Organize your digital life effortlessly",
    features: ["Photo Organization", "Task Management", "File Sync", "Smart Search"],
    color: "accent-teal"
  },
  {
    icon: IconPalette,
    title: "Creative",
    description: "Tools for creative professionals",
    features: ["Asset Library", "Project Templates", "Version Control", "Client Sharing"],
    color: "primary-orange"
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            Tailored <span className="text-primary-orange">Solutions</span>
          </h2>
          <p className="text-primary-gray max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Service Tabs */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ x: 5 }}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    activeTab === index 
                      ? 'bg-primary-orange text-white shadow-orange' 
                      : 'bg-white text-primary-gray hover:bg-primary-orange/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <service.icon className="w-6 h-6" />
                    <span className="font-semibold">{service.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-16 h-16 rounded-xl bg-${services[activeTab]?.color}/10 flex items-center justify-center`}>
                  {services[activeTab] && React.createElement(services[activeTab].icon, {
                    className: `w-8 h-8 text-${services[activeTab].color}`
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-black mb-2">
                    {services[activeTab]?.title}
                  </h3>
                  <p className="text-primary-gray">
                    {services[activeTab]?.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services[activeTab]?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full bg-${services[activeTab]?.color}/10 flex items-center justify-center`}>
                      <IconCheck className={`w-4 h-4 text-${services[activeTab]?.color}`} />
                    </div>
                    <span className="text-primary-gray">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 rounded-xl bg-primary-orange text-white font-semibold hover:shadow-orange transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <IconArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 