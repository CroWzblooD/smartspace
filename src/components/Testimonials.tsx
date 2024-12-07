"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { IconUser, IconBriefcase, IconSchool, IconPalette, IconStar } from '@tabler/icons-react';

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Business Manager",
    icon: IconBriefcase,
    content: "SmartSpace AI transformed our document management. 10x faster file retrieval!",
    rating: 5,
    bgColor: "primary-orange"
  },
  {
    name: "Priya Singh",
    role: "Research Scholar",
    icon: IconSchool,
    content: "Perfect for organizing research. The AI categorization is brilliant!",
    rating: 5,
    bgColor: "accent-blue"
  },
  {
    name: "Aman Verma",
    role: "Creative Director",
    icon: IconPalette,
    content: "Managing creative assets is now effortless. A game-changer!",
    rating: 5,
    bgColor: "accent-teal"
  },
  {
    name: "Neeta Patel",
    role: "Personal User",
    icon: IconUser,
    content: "Finally, all my digital life is perfectly organized!",
    rating: 5,
    bgColor: "primary-orange"
  }
];

export default function Testimonials() {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start(i => ({
        x: ['0%', '-100%'],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: i * 5
        }
      }));
    };
    animate();
  }, [controls]);

  return (
    <section className="py-20 bg-primary-light overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            What Our <span className="text-primary-orange">Users Say</span>
          </h2>
          <p className="text-primary-gray max-w-2xl mx-auto">
            Join thousands of satisfied users worldwide
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 w-fit">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                animate={controls}
                className="w-[300px] flex-shrink-0"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-${testimonial.bgColor}/10 flex items-center justify-center`}>
                      <testimonial.icon className={`w-5 h-5 text-${testimonial.bgColor}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-black">{testimonial.name}</h4>
                      <p className="text-xs text-primary-gray">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-primary-gray text-sm mb-4">"{testimonial.content}"</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IconStar key={i} className="w-4 h-4 text-primary-orange" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 