const path = require('path');
const mix = require('laravel-mix');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | إعدادات Webpack المخصصة
 |--------------------------------------------------------------------------
*/

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            'vue$': 'vue/dist/vue.esm.js',

            // تجاهل مكتبة xlsx-js واستخدام xlsx بدلاً منها
            'xlsx-js': false,
        },
        extensions: ['.js', '.vue', '.json'],

        // ✅ إضافة حلول بديلة (fallbacks) لوحدات Node.js غير المدعومة في المتصفح
        fallback: {
            "path": require.resolve("path-browserify"),
            "timers": require.resolve("timers-browserify"),
            "fs": false,
            "crypto": false,
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    plugins: [
        // تجاهل بعض الوحدات غير الضرورية
        new webpack.IgnorePlugin({
            resourceRegExp: /^fs$|^path$|^crypto$|^\.\/cptable$/,
            contextRegExp: /xlsx-js/,
        }),

        // استبدال مكتبة xlsx-js بمكتبة xlsx الأساسية
        new webpack.NormalModuleReplacementPlugin(
            /xlsx-js/,
            require.resolve('xlsx')
        ),
    ],
});

/*
 |--------------------------------------------------------------------------
 | إعدادات Laravel Mix الأساسية
 |--------------------------------------------------------------------------
*/

mix.js('resources/js/app.js', 'public/js')
   .extract()
//  .js('resources/js/vendor.js', 'public/js')
   .vue()
   .sass('resources/js/styles/index.scss', 'public/css/app.css')
   .options({
       processCssUrls: false,
   });

/*
 |--------------------------------------------------------------------------
 | بيئة التطوير والإنتاج
 |--------------------------------------------------------------------------
*/
if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}
