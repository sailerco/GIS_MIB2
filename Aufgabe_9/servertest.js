"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var Aufgabe_9;
(function (Aufgabe_9) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            if (q.pathname == "/html") {
                for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }
            }
            if (q.pathname == "/json") {
                let jsonString = JSON.stringify(q.query);
                _response.write(jsonString);
            }
        }
        _response.write("This is my response");
        _response.end();
    }
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=servertest.js.map