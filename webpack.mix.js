const path = require('path');
const mix = require('laravel-mix');
const webpack = require('webpack');

// تكوين webpack
mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            'vue$': 'vue/dist/vue.esm.js',
            // تجاهل xlsx-js واستخدام xlsx بدلاً منه
            'xlsx-js': false
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /^fs$|^path$|^crypto$|^\.\/cptable$/,
            contextRegExp: /xlsx-js/
        }),
        new webpack.NormalModuleReplacementPlugin(
            /xlsx-js/,
            require.resolve('xlsx')
        )
    ]
});

// إعدادات Mix الأساسية
mix.js('resources/js/app.js', 'public/js')
   .vue()
   .sass('resources/js/styles/index.scss', 'public/css/app.css')
   .options({
        processCssUrls: false,
   });

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}