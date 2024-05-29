const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
    ...styleguide,
    tabWidth: 4,
    plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
