/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			textColor: {
				'main-txt': '#f7eadd',
			},
			backgroundColor: {
				'main-blue': '#5E60CE',
				'purple': '#7400B8',
				'header': '#7400B8',
				'footer': '#6930C3',
			},
			backgroundSize: {
				'400': '400%',
			},
			keyframes: {
				'gradient-roll': {
					'0%, 100%': { 'background-position': '0% 50%'},
					'50%': { 'background-position': '100% 50%'},
				}
			},
			animation: {
				'gradient-roll': 'gradient-roll 12s cubic-bezier(0.4, 0, 1, 1) infinite;'
			},
			backgroundImage: {
				'profile-pattern': "linear-gradient(to right, rgba(83, 144, 217,0.8), rgba(0, 0, 0, 0)), url('./src/assets/profilePic.webp')",
			}
		},
  },
  plugins: [],
}

