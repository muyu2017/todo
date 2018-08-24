    
    
    const path =require('path');

    const webpack =require('webpack');

    const HTMLPlugin =require('html-webpack-plugin');

    const VueLoaderPlugin = require('vue-loader/lib/plugin');

    const idDev = process.env.NODE_ENV   === 'development';

  const config = {
        target:"web",
        entry:path.join(__dirname,'/src/index.js'),
        output:{
            filename:'bundle.js',
            path:path.join(__dirname,'dist')
        },
        module:{
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.jsx$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use:['style-loader','css-loader']
                },
                {
                    test:/\.styl/,
                    use:[
                        'style-loader',
                        'css-loader',
                        {
                            loader:'postcss-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        'stylus-loader'
                    ]
                },
                {
                    test: /\.(git|jpg|jpeg|png|svg)$/,
                    use:[
                        {
                            loader :'url-loader',
                            options:{
                                limit:1024,
                                name:'[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env':{
                     NODE_ENV: idDev ? '"development"' : '"production"'   
                }
            }),
            // make sure to include the plugin for the magic
            new VueLoaderPlugin(),
            new HTMLPlugin()
             
        ],
    }


    if(idDev){
        config.devtool ='#cheap-module-eval-source-map'
        config.devServer={
            port:8001,
            host:'0.0.0.0',
            overlay:{
                errors: true,
            },
            hot:true
        }
       config.plugins.push(
           new webpack.HotModuleReplacementPlugin(),
           new webpack.NoEmitOnErrorsPlugin()
       )
    }


    module.exports =config ;