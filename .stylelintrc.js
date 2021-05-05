module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    indentation: 4,
    "order/order": [
      "custom-properties",
      "declarations"
    ]
  }
}
