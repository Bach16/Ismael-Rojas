/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        akshar: ['Akshar', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        anton: ["Anton","Media Sans Semicondensed","Impact","Work Sans","sans-serif"]
      },
    },
  },
  plugins: [],
}