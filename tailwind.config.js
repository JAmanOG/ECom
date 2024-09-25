/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./index.html",
  //   "./src/**/*.{html,js,jsx,ts,tsx}",
  //   "./src/sidebar.html",
  //   "./base.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Target your source files explicitly
    "./public/index.html",
    "!./node_modules", // Explicitly exclude node_modules
    "!./src/razorpay-backend"
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        redd: "#FF0000",
        blackk: "#000000",
        yelloww: "#FFFF00",
        greenn: "#00FF00",
        // Add other colors as needed
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
