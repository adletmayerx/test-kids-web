/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matterhorn: "#555252",
        nero: "#212020",
      },
    },
  },
  plugins: [],
};
