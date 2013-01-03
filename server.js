var nodestatic = require('node-static')
  , http = require("http")
  , url = require("url")
  , filed = require('filed');
//
// Create a node-static server instance to serve the './public' folder
//
var fileserver = new(nodestatic.Server)('./public')

var server = http.createServer(function (request, response) {
    
    /*
     * Example of homespun routing
     * (Need to implement)
     */
    if(request.url === "/test") {
            console.log("someones asking for test!!!")
            return filed('public/test.html').pipe(response)
    }
    
    request.addListener('end', function () {
        //
        // Serve files!
        //
        fileserver.serve(request, response)
    })
})

server.listen(process.env.PORT)

