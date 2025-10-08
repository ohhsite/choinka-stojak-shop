import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Christmas palette
        pine: {
          DEFAULT: '#184C36', // deep green
          light: '#2E6B4C',
          dark: '#133A29',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FFE066',
          dark: '#B89B2C',
        },
        holly: {
          DEFAULT: '#C0392B', // elegant red
          light: '#E74C3C',
          dark: '#922B21',
        },
        snow: {
          DEFAULT: '#F8F8F8', // white
          soft: '#F3F6F9',
        },
        mist: {
          DEFAULT: '#E5E7EB', // soft gray
          dark: '#B0B7C3',
        },
        // Override main theme colors
        background: '#F8F8F8',
        foreground: '#184C36',
        primary: {
          DEFAULT: '#184C36',
          foreground: '#F8F8F8',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          foreground: '#184C36',
        },
        accent: {
          DEFAULT: '#C0392B',
          foreground: '#F8F8F8',
        },
        muted: {
          DEFAULT: '#E5E7EB',
          foreground: '#184C36',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#184C36',
        },
        border: '#D4AF37',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
