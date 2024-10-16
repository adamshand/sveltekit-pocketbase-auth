import type { Config } from 'tailwindcss'

export default {
	content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
	},

	plugins: [require('daisyui')],
	variants: {
	  extend: {},
	},
	darkmode: 'class', // or 'media' or 'class'
} as Config
