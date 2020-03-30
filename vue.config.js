const { WebpackWarPlugin } = require('webpack-war-plugin');

const webpackWarPluginOptions = {
    archiveName: "monster-slayer",
    webInf: "./WEB-INF"
}

/**
 * publicPath should be the expected endpoint name.
 * - It needs to be prepended with a forward slash.
 * - The archiveName should match the publicPath - without the forward slash.
 * - The WEB-INF/jboss-web.xml should be identical to the publicPath - including the forward slash.
 */ 
module.exports = { 
    devServer: { 
        host: "localhost" 
    },
    publicPath: "/monster-slayer",
    configureWebpack: {
        plugins: [
            new WebpackWarPlugin(webpackWarPluginOptions)
        ]
    }
}