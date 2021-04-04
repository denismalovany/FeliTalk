module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontSize: {
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '24': '1.5rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '56': '3.5rem',
        'logo': '2rem'
       },
       fontFamily: {
         'logo': 'Nunito',
         'Ubuntu': 'Ubuntu'
       },
       colors: {
        'f-text': '#0E0E0E',
        'f-yellow': '#FFB703',
        'f-dark-blue': '#103045',
        'f-light-blue': '#9AC9E3',
        'f-orange': '#ED8A33',
        'f-blue': '#4B9DB9',
        'f-white': '#FFFFFF',
        'f-dark-grey': '#5E5E5E',
        'f-grey': '#989898',
        'f-light-grey': '#DEDEDE',
        'f-red': '#FF3939',
        'f-very-light-blue': '#ECF8FF',
        'f-bcg': '#F6FAFC',
        'f-16-blue': '#E2EFF4',
        'f-16-grey': '#EEEEEE',
      },
      height:{
        '748px': "46.75rem",
        '88px': "5.5rem",
        '312px': '19.5rem',
        '54px': '3.375rem',
        '41px': '2.563rem',
        '68px': '4.25rem',
      },
      spacing:{
        '468px': "29.25rem",
        '615px': "38.438rem",
      },
      width:{
        '54px': '3.375rem',
        '68px': '4.25rem',
        '88px': '5.5rem',
        '424px': '26.5rem',
        '100-384px': 'calc(100vw - 24rem)',
        '100-7rem': 'calc(100vw - 7rem)',
        '1344px': '84rem',
        '200px': '12.5rem',
      },
      maxWidth:{
        '312px': '19.5rem',
        '1/4': '25%',
        '424px': '26.5rem',
        '220px': '13.75rem',
        '200px': '12.5rem',
        '728px': '45.5rem',
        '984px': '61.5rem',
        '1248px': '78rem',
        '1344px': '84rem',
      },
      maxHeight:{
        '312px': '19.5rem',
      },
      boxShadow: {
        'hover': '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04)',
        'medium': '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04)',
        'large': '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04)',
        'base': '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'videocard': "url('img/pretty-asian-teacher-smiling-camera-back-classroom-elementary-school-vintage-effect-style-pictures 1.jpg')",
        'team': "url('img/Group 13098.svg')",
        'polygon': "url('img/num-polygon.svg')",
      },
      opacity:{
        '16': '0.16',
      },
      padding:{
        '30px': '1.875rem',
        '60px': '3.75rem',
        '50px': '3.125rem',
        '100%': '100%',
        '25%': '25%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
