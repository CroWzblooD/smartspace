"use client";

import { motion } from 'framer-motion';
import { 
  IconBrain, 
  IconBrandTwitter, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconArrowRight,
  IconMail 
} from '@tabler/icons-react';

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "Updates"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"]
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Documentation", "Support"]
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Security", "Status"]
  }
];

const socialLinks = [
  { icon: IconBrandTwitter, href: "#" },
  { icon: IconBrandLinkedin, href: "#" },
  { icon: IconBrandGithub, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">
                Stay Updated with <span className="text-primary-orange">SmartSpace</span>
              </h3>
              <p className="text-primary-gray max-w-md">
                Get the latest updates, news, and insights delivered directly to your inbox.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="flex-1 relative">
                <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-gray w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-primary-orange text-white font-semibold hover:shadow-orange transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <IconArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-2">
            <motion.div 
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <IconBrain className="w-8 h-8 text-primary-orange" />
              <span className="text-2xl font-bold text-primary-black">
                Smart<span className="text-primary-orange">Space</span>
              </span>
            </motion.div>
            <p className="text-primary-gray mb-6 max-w-sm">
              Transform your digital workspace with AI-powered organization and seamless integration.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center text-primary-orange hover:bg-primary-orange hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="font-semibold text-primary-black mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-primary-gray hover:text-primary-orange transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-gray text-sm">
            © 2024 SmartSpace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.a 
              href="#" 
              className="text-sm text-primary-gray hover:text-primary-orange transition-colors"
              whileHover={{ x: 2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm text-primary-gray hover:text-primary-orange transition-colors"
              whileHover={{ x: 2 }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
} 