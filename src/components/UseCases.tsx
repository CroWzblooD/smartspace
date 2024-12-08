"use client";

import { motion } from 'framer-motion';
import { IconBriefcase, IconSchool, IconHome, IconPalette } from '@tabler/icons-react';

const useCases = [
  {
    icon: IconBriefcase,
    title: "Business Professional",
    persona: "Meet Rahul",
    description: "Access any document instantly during meetings, manage 100+ daily emails, and organize work across 3 laptops and multiple cloud accounts.",
    features: [
      "Voice-powered document search",
      "Cross-device file sync",
      "Smart email organization",
      "Meeting context awareness"
    ],
    impact: "Save 70% time in document searches",
    color: "primary-orange"
  },
  {
    icon: IconSchool,
    title: "Student Life",
    persona: "Meet Priya",
    description: "Keep assignments, research papers, and study materials organized across devices. Access any document instantly in the library or during classes.",
    features: [
      "Quick notes retrieval",
      "Assignment tracking",
      "Study material organization",
      "Multi-device sync"
    ],
    impact: "Never miss assignment deadlines",
    color: "primary-blue"
  },
  {
    icon: IconPalette,
    title: "Creative Professional",
    persona: "Meet Aman",
    description: "Manage thousands of photos and videos efficiently. Free up storage space by detecting duplicates and organizing media automatically.",
    features: [
      "Smart photo organization",
      "Duplicate detection",
      "Storage optimization",
      "Auto-categorization"
    ],
    impact: "Optimize storage by 40%",
    color: "primary-green"
  },
  {
    icon: IconHome,
    title: "Family Manager",
    persona: "Meet Neeta",
    description: "Keep family photos, documents, and memories secure and organized. Access any file instantly while maintaining privacy and security.",
    features: [
      "Face ID protection",
      "Smart album creation",
      "Family file sharing",
      "Secure backup system"
    ],
    impact: "Keep memories safe and organized",
    color: "primary-purple"
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