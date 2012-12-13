var nodestatic = require('node-static')
  , http = require("http")
//
// Create a node-static server instance to serve the './public' folder
//
var fileserver = new(nodestatic.Server)('./public')

var server = http.createServer(function (request, response) {
    
    /*
     * Example of homespun routing
     * (Need to implement)
     */
    
    
    request.addListener('end', function () {
        //
        // Serve files!
        //
        fileserver.serve(request, response)
    })
})

server.listen(process.env.PORT)