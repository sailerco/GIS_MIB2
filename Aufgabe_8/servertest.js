"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
//import * as Url from "url";
var Aufgabe_8;
(function (Aufgabe_8) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let formData = new FormData(document.forms[0]);
    console.log(formData.get("fname"));
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    function buttonclick() {
        console.log("button");
    }
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
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=servertest.js.map