/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        accent: {
          sky: '#7dd3fc',   // trans sky
          pink: '#f9a8d4',  // trans pink
        }
      },
      boxShadow: {
        card: '0 8px 30px rgba(2,6,23,.10)',
        hover: '0 14px 40px rgba(2,6,23,.18)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .5s ease-out both',
      },
    },
  },
  plugins: [],
};
