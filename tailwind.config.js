/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-0": "#FFFFFF",
        "neutral-10": "#F7F8FD",
        "neutral-20": "#EFF0F6",
        "neutral-30": "#D9D9E2",
        "neutral-40": "#ABABBC",
        "neutral-50": "#727393",
        "neutral-60": "#464763",
        "neutral-80": "#202039",
        "primary-100": "#E6FAF8",
        "primary-200": "#B3F0E9",
        "primary-400": "#66E1D3",
        "primary-500": "#00CDB5",
        "primary-600": "#00A491",
        "primary-700": "#007B6D",
        "sub-blue": "#26A4FF",
        "sub-purple": "#9616DA",
        "sub-red-50": "#FF4363",
        "sub-red-300": "#FF3053",
        "sub-red-600": "#F0073F",
        "sub-yellow-50": "#FFFBD5",
        "sub-yellow-300": "#FFD954",
        "sub-yellow-600": "#FFB800",
      },
    },
  },
  plugins: [],
};