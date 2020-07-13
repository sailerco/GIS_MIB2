"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe_11;
(function (Aufgabe_11) {
    console.log("start");
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://cocosailer:qJjLWY@clustergis-nrwvt.mongodb.net/Test?retryWrites=true&w=majority";
    /* let databaseUrl: string = "mongodb://localhost:27017"; */
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        console.log("Starting server on port " + _port);
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("dudes");
        console.log("Database connection", orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let jsonString;
            if (url.pathname == "/button") {
                storeOrder(url.query);
            }
            if (url.pathname == "/retrieve") {
                jsonString = JSON.stringify(await orders.find().toArray());
                jsonString += "<br>";
                _response.write(jsonString);
            }
            if (url.pathname == "/delete") {
                deleteOrder();
            }
        }
        _response.end();
    }
    function storeOrder(_url) {
        orders.insertOne(_url);
    }
    function deleteOrder() {
        orders.drop();
    }
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=server.js.map