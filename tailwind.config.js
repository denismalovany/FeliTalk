module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      },
      height:{
        '748px': "46.75rem",
        '88px': "5.5rem",
        '312px': '19.5rem',
        '54px': '3.375rem',
        '41px': '2.563rem',
      },
      width:{
        '54px': '3.375rem',
      },
      maxWidth:{
        '312px': '19.5rem',
        '1/4': '25%',
      },
      maxHeight:{
        '312px': '19.5rem',
      },
      boxShadow: {
        'hover': '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04)',
        'medium': '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'videocard': "url('img/young-asia-businessman-using-computer-laptop-talk-colleagues-about-plan-video-call-meeting-while-working-from-home-living-room-self-isolation-social-distancing-quarantine-corona-virus.jpg')",
        'team': "url('img/Group 13098.svg')",
      },
      opacity:{
        '16': '0.16',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
