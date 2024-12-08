"use client";

import { motion } from 'framer-motion';
import { IconArrowRight, IconCircuitMotor, IconShip, IconSpaces } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-primary-light pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <IconShip className="text-primary-orange w-5 h-5" />
              <span className="text-sm text-primary-gray">Your Digital Life Assistant</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary-black block mb-2">Smart Space AI</span>
              <div className="relative inline-block">
                <span className="text-primary-orange relative z-10">Organize Smart, Live Free</span>
              </div>
            </h1>

            <p className="text-xl text-primary-gray leading-relaxed max-w-xl">
              Effortlessly manage thousands of files across multiple devices and cloud accounts. 
              Just say "Show me last month's presentation" and let AI find it instantly.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-primary-orange text-white font-semibold hover:shadow-orange transition-all duration-300 flex items-center gap-2"
              >
                Get Started Free
                <IconArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-primary-gray hover:text-primary-orange transition-colors"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary-orange text-primary-orange">
                  ▶
                </span>
                Watch Demo
              </motion.button>
            </div>

            {/* Updated Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "70%", label: "Time Saved in Searches" },
                { number: "40%", label: "Storage Optimized" },
                { number: "5+", label: "Cloud Services Connected" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary-orange">{stat.number}</div>
                  <div className="text-sm text-primary-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Interactive Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 relative h-[500px]"
          >
            {/* Circuit Pattern Background */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage: 'url("/circuit-pattern.png")',
                backgroundSize: 'cover',
              }}
            />

            {/* Animated Circles */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="absolute w-72 h-72 rounded-full border-2 border-primary-orange/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-56 h-56 rounded-full border-2 border-accent-blue/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center Icon */}
              <motion.div
                className="relative z-10 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(255, 87, 34, 0.4)',
                    '0 0 0 20px rgba(255, 87, 34, 0)',
                    '0 0 0 0 rgba(255, 87, 34, 0.4)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <IconSpaces className="w-16 h-16 text-primary-orange" />
              </motion.div>

              {/* Floating Elements */}
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                  style={{
                    top: `${20 + index * 20}%`,
                    left: `${20 + index * 15}%`,
                  }}
                >
                  <IconCircuitMotor className="w-6 h-6 text-primary-orange" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 