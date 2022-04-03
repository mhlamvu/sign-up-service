const path = require("path")

module.exports = {
  entry: './src/scripts.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  mode: 'development'
}