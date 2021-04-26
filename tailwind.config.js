module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
          'space': "url('https://upload.wikimedia.org/wikipedia/commons/9/93/Cederblad_90_Gum_3_Nebula_from_the_Mount_Lemmon_SkyCenter_Schulman_Telescope_courtesy_Adam_Block.jpg')",
          'trees': "url('https://upload.wikimedia.org/wikipedia/commons/f/f3/Green_and_red_polar_lights_%28Unsplash%29.jpg')"
        })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
