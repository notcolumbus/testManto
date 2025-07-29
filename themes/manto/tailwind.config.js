/** @type {import('tailwindcss').Config} */
module.exports = {
  // The 'content' array must be at the top level, not inside 'theme'.
  content: [
    "./layouts/**/*.html", // Scans the theme's own layouts
    "../../layouts/**/*.html", // Scans the user's layouts
    "../../content/**/*.md", // Scans the user's content
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
