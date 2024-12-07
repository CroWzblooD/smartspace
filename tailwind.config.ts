import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...fontFamily.sans],
        mono: ["var(--font-space-mono)", ...fontFamily.mono],
      },
      colors: {
        primary: {
          orange: '#FF5722',  // Main orange
          black: '#1A1A1A',   // Soft black
          gray: '#2D2D2D',    // Dark gray
          light: '#F5F5F5',   // Light background
        },
        accent: {
          blue: '#2196F3',    // Accent blue
          teal: '#00BCD4',    // Accent teal
          amber: '#FFA000',   // Dark orange/amber
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #E0E0E0 1px, transparent 1px)',
        'gradient-primary': 'linear-gradient(135deg, #FF5722 0%, #FFA000 100%)',
      },
      boxShadow: {
        'orange': '0 4px 14px 0 rgba(255, 87, 34, 0.3)',
        'hover': '0 10px 30px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
} satisfies Config;
