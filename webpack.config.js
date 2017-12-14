const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const devPort = 5000;


module.exports = {
    entry: {
        app: './src/index.js', // 파일 경로 , 키값에 따라 결과물의 js 이름이 변경된다. ex) app.js
        //  app: ['a.js', 'b.js'] 하나의 entry에  여러파일을 넣고싶을때
    },
    output: {
        path: path.join(__dirname, 'dist'), // output으로 나올 파일이 저장될 경로
        filename: '[name].bundle.js', // [name] : entry 에서의 Key 값 , [hash] : 컴파일의 md5 해시값, [chunkhash] : 해당 청크(번들)의 해시값
        publicPath: 'http://127.0.0.1:5000/',  // 파일들이 위치할 서버 상의 경로
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                'targets': { node: 'current'}, // 노드일 경우만
                                "modules": false // modules를 false로 해야 트리 쉐이킹 가능
                            }],
                            "es2015",
                            "stage-0",
                            "react"
                        ],
                    },
                },
            ],
            // options: {
            //     presets: [
            //         ['env', {
            //             'targets': { node: 'current'}, // 노드일 경우만
            //             "modules": false // modules를 false로 해야 트리 쉐이킹 가능
            //         }],
            //         ["es2015"],
            //         ['stage-0']
            //     ],
            // },
            exclude: ['node_modules'],
        }, {
            test: /\.css$/,
            // use: ['style-loader', 'css-loader'],  // 여러 개의 로더를 동시에 사용할 때는 키값 use를 사용, 단일 일시 loader 사용
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',  // 해당 플러그인 작동 실패시 대안으로 style-loader 동작
                use: ['css-loader','postcss-loader'] // css-loader를 거친 후 extract-text-webpack-plugin으로 파일을 추출
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',  // 해당 플러그인 작동 실패시 대안으로 style-loader 동작
                use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
            }) // 파일 추출할때는  ExtractTextPlugin 플러그인사용하고 css도 bundle.js에서 처리하려면 아래와 같이 loaders로 처리
            // loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'  // html 핫리로드 시켜주는 플러그인
        }],
    },

    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:4000'
        },
        port: devPort,
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location    // index 파일의 위치
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. 내용이 변경된 모듈을 페이지 새로고침 없이 런타임에서 업데이트를하고 업데이트에 실패할 경우 새로고침을 수행.
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        inline: true
        // ...
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['index'],
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
            }
        }),
        new webpack.HotModuleReplacementPlugin(), // HMR을 사용하기 위한 플러그인
        new webpack.LoaderOptionsPlugin({  //  로더들에게 옵션을 넣어주는 플러그인
            minimize: true,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),  //  웹팩3에서 새로 나왔는데 웹팩이 변환하는 자바스크립트 코드를 조금이나마 더 줄여줌
        // new webpack.optimize.UglifyJsPlugin({   //  압축, console 제거, 소스맵 보존 등을 하는 플러그인
        //     sourceMap: true,
        //     compress: {
        //         warnings: true,
        //     },
        // }),
        new webpack.DefinePlugin({  //  JS 변수를 치환해주는 플러그인
            'process.env.NODE_ENV': JSON.stringify('development'), // 아래 EnvironmentPlugin처럼 할 수도 있음.
            // 'process.env.NODE_ENV': JSON.stringify('production'), // 아래 EnvironmentPlugin처럼 할 수도 있음.
        }),
        /*
         new webpack.EnvironmentPlugin(['NODE_ENV']), // 요즘은 위의 DefinePlugin보다 이렇게 하는 추세.
         */
        new webpack.optimize.OccurrenceOrderPlugin(), //  모듈을 할당하고 발생 카운트 아이디들을 발생
        new ExtractTextPlugin({
            filename: './assets/css/style.css' // scss -> css 변환후 해당 경로에 추출
        }),
    ],
    resolve: {
        modules: ['node_modules'],  // 디렉토리 설정
        extensions: ['.js','.json','.jsx','.css'],  // webpack3 에선 자동처리해줘서 생략가능
    },
};