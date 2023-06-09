/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {

        'theme1-main-background': 'hsl(222, 26%, 31%)',
        'theme1-toggle-background': 'hsl(223, 31%, 20%)',
        'theme1-keypad-background': 'hsl(223, 31%, 20%)',
        'theme1-screen-background': 'hsl(224, 36%, 15%)',
        'theme1-key-background': 'hsl(225, 21%, 49%)',
        'theme1-key-shadow': 'hsl(224, 28%, 35%)',
        'theme1-key-red': 'hsl(6, 63%, 50%)',
        'theme1-key-red-shadow': 'hsl(6, 70%, 34%)',
        'theme1-key-orange': 'hsl(30, 25%, 89%)',
        'theme1-key-orange-shadow': 'hsl(28, 16%, 65%)',
        'theme1-text-very-dark-grayish-blue': 'hsl(221, 14%, 31%)',
        'theme1-text-white': 'hsl(0, 0%, 100%)',
        
        'theme2-main-background': 'hsl(0, 0%, 90%)',
        'theme2-toggle-background': 'hsl(0, 5%, 81%)',
        'theme2-keypad-background': 'hsl(0, 5%, 81%)',
        'theme2-screen-background': 'hsl(0, 0%, 93%)',
        'theme2-key-background': 'hsl(185, 42%, 37%)',
        'theme2-key-shadow': 'hsl(185, 58%, 25%)',
        'theme2-key-orange': 'hsl(25, 98%, 40%)',
        'theme2-key-orange-shadow': 'hsl(25, 99%, 27%)',
        'theme2-key-light-grayish-yellow': 'hsl(45, 7%, 89%)',
        'theme2-key-dark-grayish-orange': 'hsl(35, 11%, 61%)',
        'theme2-text-very-dark-grayish-yellow': 'hsl(60, 10%, 19%)',

        'theme3-main-background': 'hsl(268, 75%, 9%)',
        'theme3-toggle-background': 'hsl(268, 71%, 12%)',
        'theme3-keypad-background': 'hsl(268, 71%, 12%)',
        'theme3-screen-background': 'hsl(268, 71%, 12%)',
        'theme3-key-background': 'hsl(281, 89%, 26%)',
        'theme3-key-border': 'hsl(281, 57%, 59%)',
        'theme3-key-hover': 'hsl(285, 75%, 35%)',
        'theme3-key-shadow': 'hsl(285, 94%, 53%)',
        'theme3-key-cyan': 'hsl(176, 100%, 44%)',
        'theme3-key-cyan-shadow': 'hsl(177, 92%, 70%)',
        'theme3-text-light-yellow': 'hsl(52, 100%, 62%)',
        'theme3-text-very-dark-blue': 'hsl(198, 20%, 13%)',
      },
    },
  },
  plugins: [],
}
