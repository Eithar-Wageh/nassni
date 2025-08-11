/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // بيحدد إن Tailwind يطبّق على ملفات React
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // أزرق هادئ
        secondary: '#FFFFFF', // أبيض
        secondaryAlt: '#F5F5F5', // رمادي فاتح
        accent: '#FFC107', // أصفر
        darkModeBg: '#1C2526', // رمادي غامق
        darkModeText: '#FFFFFF', // أبيض للنصوص
        highContrastText: '#000000', // أسود
        highContrastBg: '#FFFFFF', // أبيض
      },
    },
  },
  plugins: [],
}