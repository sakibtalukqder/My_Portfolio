/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("keep-react/src/keep-preset.js")],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ 
      "light"
      // {
      //   light: {
      //     ...require("daisyui/src/theming/themes")["dark"],
      //     "body": {
      //       "background-color": "#080808",
      //       "color": "white",
      //     },
      //     ".btn-twitter:hover": {
      //       "background-color": "#1C96E1",
      //       "border-color": "#1C96E1",
      //     },
      //   },
      // },
    ],
  },
}
