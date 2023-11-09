/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'unblur': {
          '0%': { 'filter': 'blur(10px)', opacity: 0, 'scale': '0.95' },
          '100%': { 'filter': 'blur(0)', opacity: 1, 'scale': '1' },
        },
      },
      animation: {
        'unblur': 'unblur 0.8s ease-in-out forwards',
      },
      backdropBlur: {
        'none': '0',
        'blur': 'blur(20px)',
      },
      backgroundImage: {
        'wallpaper': "url('/assets/img/waves.webp')",
      },
      minWidth: {
        '70': '70%', // Add custom min-width
      },
      minHeight: {
        '70': '70%', // Add custom min-width
      }
    }
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
    },
  },
  plugins: [],
}

