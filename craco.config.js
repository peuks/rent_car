const path = require('path')
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@components": (__dirname, 'src/components'),
      "@images": (__dirname, 'src/assets/images')
    },
  },
};
