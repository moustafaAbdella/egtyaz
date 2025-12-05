const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(
    __dirname,
    '/resources/js',
    dir
  );
}

module.exports = {
  resolve: {
  extensions:[".*",".wasm",".mjs",".js",".jsx",".json",".vue"],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/resources/js'),
    },
    fallback: {
      "path": require.resolve("path-browserify"),
      "timers": require.resolve("timers-browserify"),
      // Add any other necessary fallbacks here
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('icons')],
        options: {
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
};
