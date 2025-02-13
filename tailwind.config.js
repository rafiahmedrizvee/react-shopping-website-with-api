/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui:{
    themes:[
      {
        eCommerceTheme:{
          primary:"#f68222",
          secondary:"#000000b3"
        }
      }
    ]
  },
  theme:{
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
