/** @type {import('tailwindcss').Config} */

import colorsConfig from './src/config/color'

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colorsConfig.primary,
        secondary: colorsConfig.secondary,
        background: colorsConfig.background,
        text: colorsConfig.text,
        'american-purple': colorsConfig.AMERICAN_PURPLE,
        'arylide-yellow': colorsConfig.ARYLIDE_YELLOW,
        'alice-blue': colorsConfig.ALICE_BLUE,
        'rich-black': colorsConfig.RICH_BLACK,
        'beau-blue': colorsConfig.BEAU_BLUE,
        rackley: colorsConfig.RACKLEY,
        'deep-space-sparkle': colorsConfig.DEEP_SPACE_SPARKLE,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
