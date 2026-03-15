/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CAEB66",
        secondary: "#00302E",
        accent: "#C2E46B",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#CAEB66",
          secondary: "#00302E",
          accent: "#C2E46B",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
        },
        dark: {
          primary: "#CAEB66",
          secondary: "#8fdbce",
          accent: "#C2E46B",
          neutral: "#e5e7eb",
          "base-100": "#1e293b",
          "base-200": "#0f172a",
          "base-300": "#020617",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
