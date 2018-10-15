const StylelintPlugin = require('stylelint-webpack-plugin')
plugins: [
  new StylelintPlugin({
    files: [
      'src/**/*.vue',
      'src/**/*.scss'
    ]
  }),
  new FriendlyErrorsPlugin({
    clearConsole: false
  })
]
