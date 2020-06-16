"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_8 = void 0;
const Http = require("http");
var Aufgabe_8;
(function (Aufgabe_8) {
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
        _response.write(_request.url);
        _response.end();
    }
})(Aufgabe_8 = exports.Aufgabe_8 || (exports.Aufgabe_8 = {}));
//# sourceMappingURL=servertest.js.map