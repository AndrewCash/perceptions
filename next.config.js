// const withTypescript = require('@zeit/next-typescript')
// const withSass = require('@zeit/next-sass')

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  reactStrictMode: true,
}
