import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['var(--font-raleway)', 'sans-serif'],
				 poppins: ['var(--font-poppins)', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
