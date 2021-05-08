/* global __dirname, process */
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var path = require("path");
var fs = require("fs");

var options = require("./options.json" );


function logOnDev(message) {
    if (process.env.NODE_ENV === "development") {
        console.log(message);
    }
}

var ACTIONS = {
    "/meupedido" : meupedido,
    "/meupedido2": meupedido2
}
    
function router(request) {
    var pathname = querystring.unescape(url.parse(request.url).pathname);
    if ( ACTIONS[pathname] )
        return {
                    handler: ACTIONS[pathname],
                    filename: null
                }

    switch (pathname) {
        case "/": pathname += options.default.document;
            break;
        case "/favicon.ico": pathname = options.default.favicon;
            break;
        default:
            break;
    }
    logOnDev("Pathname Resolved=" + pathname);
    return {
            handler: null,
            filename: pathname
            ? path.join(__dirname, options.default.folder, pathname)
            : null
        }
}

function mimeType(filename) {
    var extension = path.extname(filename);
    if (extension.charAt(0) === ".") {
        extension = extension.substr(1);
    }
    return options.extensions[extension];
}

function meupedido(request)
{
    return "Hello World - " + (new Date()).toString();
}

function meupedido2(request)
{
    return "Hello World 2";
}

http.createServer(function (request, response) {
    logOnDev(`Request for ${request.url} received.`);
    var rota = router(request);
    logOnDev(`Filename ${rota.filename}.`);

    if(rota.handler ){
        let dados = rota.handler(request);
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(dados);
                response.end();
    }else if(rota.filename){
        fs.readFile(rota.filename, function (err, data) {
            if (err) {
                logOnDev(err);
                response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
                response.write("HTTP Status: 404 : NOT FOUND");
            } else {
                response.writeHead(200, { "Content-Type": mimeType(rota.filename) });
                response.write(data);
            }
            response.end();
        });
        
    }else{
        response.writeHead(500, { "Content-Type": "text/html" });
                response.write("Não existe essa função no servidor");
                response.end();
    }
    
}).listen(options.default.port);

logOnDev(`Server running at http://localhost:${options.default.port}/`);
