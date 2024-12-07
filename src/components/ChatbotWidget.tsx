"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  IconMessageCircle, 
  IconX, 
  IconSend, 
  IconRobot, 
  IconUser,
  IconChevronDown 
} from '@tabler/icons-react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! How can I help you organize your digital life today?',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: 'Thanks for your message! I\'m here to help you with SmartSpace AI.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-96 max-w-[96vw] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-orange to-accent-blue p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <IconRobot className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-white font-semibold">SmartSpace AI Assistant</h3>
                    <span className="text-white/80 text-sm">Always here to help</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[60vh] sm:h-96 overflow-y-auto p-3 sm:p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${
                    msg.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.type === 'user' 
                      ? 'bg-primary-orange/10' 
                      : 'bg-accent-blue/10'
                  }`}>
                    {msg.type === 'user' 
                      ? <IconUser className="w-4 h-4 text-primary-orange" />
                      : <IconRobot className="w-4 h-4 text-accent-blue" />
                    }
                  </div>
                  <div className={`flex-1 p-3 rounded-xl ${
                    msg.type === 'user'
                      ? 'bg-primary-orange/10 text-primary-black'
                      : 'bg-gray-100 text-primary-black'
                  }`}>
                    <p>{msg.content}</p>
                    <span className="text-xs text-primary-gray mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="p-2 rounded-xl bg-primary-orange text-white hover:shadow-orange transition-all duration-300"
                >
                  <IconSend className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-orange text-white shadow-lg hover:shadow-orange flex items-center justify-center transition-all duration-300"
      >
        {isOpen ? (
          <IconChevronDown className="w-6 h-6" />
        ) : (
          <IconMessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
} 