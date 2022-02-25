const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // plugin para criar um html estatico.

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment? 'development' : 'production',  // se esta em modo de producao ou dev
    devtool: isDevelopment? 'eval-source-map' : 'source-map', // dev tool que sera usado para verificar erros
    entry: path.resolve(__dirname, 'src' , 'index.jsx'), // arquivo q sera convertido
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        // onde colocar , e qual o nome do arquivo convertido
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        // extensoes que vao ser convertidas

    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          // para usar o modo dev serve.
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
        // aqui definimos nossos plugins, nesse caso temos o HTMLwebpackplugin
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader' , 'sass-loader'],
            }

        ],
        // regras a serem aplicadas
        // test : arquivos que terminam com .algo
        // use tal coisa
        //exclua a node modules
    }
}