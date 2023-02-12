module.exports = {
  presets: ['next/babel'],
  env: {
    productions: {
      plugins: ['jsx-remove-data-test-id']
    }
  }
}
