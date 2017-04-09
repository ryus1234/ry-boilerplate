
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: 'last 2 versions'
    }),
    require('postcss-import'),
    require('postcss-extend'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-color-function'),
    require('postcss-apply'),
    require('postcss-sorting'),
    require('postcss-advanced-variables'),
    require('postcss-simple-vars'),
  ]
}