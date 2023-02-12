module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-block-trailing-semicolon': 'always'
  }
}
