/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
        colors: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          primaryHover: 'var(--color-primaryHover)',
          BgWhite: 'var(--color-BgWhite)',
          white: 'var(--color-white)',
          black: 'var(--color-black)',
          // Add more custom colors as needed
        },
    },
  },
  plugins: [],
}
