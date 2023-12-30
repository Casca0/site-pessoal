/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.js',
	trailingComma: 'es5',
	tabWidth: 2,
	singleQuote: true,
};

// eslint-disable-next-line no-undef
module.exports = config;
