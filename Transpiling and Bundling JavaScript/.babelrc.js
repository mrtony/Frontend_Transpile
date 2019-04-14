module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        debug: true,
        targets: "last 2 chrome versions, ie 11",
        corejs: '2.6.5'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        //polyfill: true, //deprecated in 7.0.0
        corejs: 2,  // 假如是2, 則一定要裝@babel/runtime-corejs2
        regenerator: true,
        //moduleName: 'babel-runtime' //deprecated in 7.0.0
      },
    ],
  ]
}