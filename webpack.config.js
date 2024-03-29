const path = require('path');
module.exports = {
    entry : './script.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'./dist'),
        publicPath : 'dist/'

    },
    mode : 'production',
    module :{
        rules : [
      
            {
                test : /\.(png|jpg)$/,
                type : 'asset/resource'
            },
            {
                test : /\.svg$/,
                type : 'asset/inline'
            },
            {
                test : /\.css$/,
                use : [
                    'style-loader','css-loader'
                ]
            }
        ]
    },
};