/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "purple": "#8200FF",
        "yellow": "#ECDA60"
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '30': '30px',
        '32': '32px',
        '36': '36px',
        '38': '38px',
        '46': '46px',
        '56': '56px',
        '68': '68px',
      },
      minWidth: {
        'sm': "375px",
        'md': "768px",
        'lg': "1024px",
        'xl': "1366px"
      },
      boxShadow: {
        "default": "rgba(99,99,99,0.1) 0px 1px 5px 0px"
      }
    },
    screens: {
      'sm': "375px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1366px"
    }
  },
  plugins: [],
};