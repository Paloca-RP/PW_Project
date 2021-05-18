var http = require("http")
var url = require("url")
var querystring = require("querystring")
var path = require("path")
var fs = require("fs")

var options = require("/options.json")

function logOnDev(message) {
    if (process.env.NODE_ENV === "development") {
        console.log(message)
    }
}

function router(request) {
    var pathname = querystring.unescape(url.parse(request.url).pathname)
    switch (pathname) {
        case "/": pathname += options.default.document
            break
        case "/favicon.ico": pathname = options.default.favicon
            break
        default:
            break
    }
    return pathname
        ? path.join(__dirname, options.default.folder, pathname)
        : null
}

function mimeType(filename) {
    var extension = path.extname(filename)
    if (extension.charAt(0) === ".") {
        extension = extension.substr(1)
    }
    return options.extensions[extension]
}

http.createServer(function (request, response) {
    logOnDev(`Request for ${request.url} received.`)
    var filename = router(request);
    logOnDev(`Filename ${filename}.`)
    if (filename) {
        
        switch( filename ){
            default:
                fs.readFile(filename, function (err, data) {
                    if (err) {
                        logOnDev(err)
                        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
                        response.write("HTTP Status: 404 : NOT FOUND");
                    } else {
                        response.writeHead(200, { "Content-Type": mimeType(filename) })
                        response.write(data)
                    }
                    response.end()
                })
        }
    }
}).listen(options.default.port)

logOnDev(`Server running at http://localhost:${options.default.port}/`)
