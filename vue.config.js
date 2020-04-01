/**
 * publicPath should be the expected endpoint name.
 * - It needs to be prepended with a forward slash.
 * - The WEB-INF/jboss-web.xml should be identical to the publicPath - including the forward slash.
 */ 
module.exports = { 
    devServer: { 
        host: "localhost" 
    },
    publicPath: "/monster-slayer"
}