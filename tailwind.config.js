// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
       
  fontFamily: {
    serif: ['Playfair Display', 'serif'],
    sans: ['Inter', 'sans-serif'],
  },


        animation: {
          fadeIn: "fadeIn 1.5s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          }
        }
      },
    },
    plugins: [],
  }
  