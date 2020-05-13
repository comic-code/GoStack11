const path = require('path'); // Para não ter conflito de caminho (windows usa a barra invertida por exemplo)

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [ // Cada um desses objetos represeta um loader diferente
            {
                test: /\.js$/,
                exclude: /node_modules/, //Não passará pelo processo do Babel
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: { loader: 'file-loader' }
            }
        ]
    }   
}