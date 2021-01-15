console.log('babel config')
module.exports = { 
    presets: [
        [
          "@babel/preset-env",
          {
            targets: {
                ie: "9",
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: "usage",
          },
        ],
    ],
    plugins: [
        /** 编译jsx有两种方案
         * 1、自定义自己的babel插件或者loader
         * 2、使用plugin-transform-react-jsx，但是自定义pragma
         */
        // './util/babel-plugin-transform-jsx/index',
        ['@babel/plugin-transform-react-jsx', {pragma:'dom'}],
        // "@babel/plugin-syntax-dynamic-import",
        // ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-transform-runtime"
    ]
};