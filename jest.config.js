module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'], //Esto se añadio para poder probar Axios
}
