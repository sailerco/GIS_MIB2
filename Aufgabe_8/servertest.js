"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const inspector_1 = require("inspector");
//import * as Url from "url";
var Aufgabe_8;
(function (Aufgabe_8) {
    console.log("Starting server"); //Ausgabe 
    let port = Number(process.env.PORT); //WElchem Port der Server zuhören soll
    if (!port)
        port = 8100; //Port wird Nummer 8100 zugewiesen
    let server = Http.createServer(); //server erstellen
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port); //server wird gesagt er soll port 8100 zuhören
    function handleListen() {
        console.log("Listening"); //ausgabe
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //ausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(inspector_1.url);
        _response.end();
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=servertest.js.map