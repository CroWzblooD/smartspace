"use client";

import { motion } from 'framer-motion';
import { IconBriefcase, IconSchool, IconHome, IconPalette } from '@tabler/icons-react';

const useCases = [
  {
    icon: IconBriefcase,
    title: "Business",
    description: "Streamline workflows and boost team productivity",
    features: ["Document Management", "Team Collaboration", "Project Tracking", "Client Portal"],
    color: "primary-orange"
  },
  {
    icon: IconSchool,
    title: "Education",
    description: "Organize study materials and research efficiently",
    features: ["Research Organization", "Study Planning", "Resource Library", "Citation Management"],
    color: "accent-blue"
  },
  {
    icon: IconHome,
    title: "Personal",
    description: "Keep your digital life organized and accessible",
    features: ["Photo Organization", "Document Storage", "Task Management", "Family Sharing"],
    color: "accent-teal"
  },
  {
    icon: IconPalette,
    title: "Creative",
    description: "Manage creative assets and streamline workflows",
    features: ["Asset Library", "Project Management", "Version Control", "Client Sharing"],
    color: "accent-amber"
  }
];

export default function UseCases() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            Solutions for <span className="text-primary-orange">Every Need</span>
          </h2>
          <p className="text-primary-gray max-w-2xl mx-auto">
            Discover how SmartSpace AI adapts to your specific requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-${useCase.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <useCase.icon className={`w-8 h-8 text-${useCase.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-black mb-2 group-hover:text-primary-orange transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-primary-gray mb-6">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {useCase.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-${useCase.color}`} />
                          <span className="text-primary-gray text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
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