"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe_11;
(function (Aufgabe_11) {
    /* interface Formular {
        [type: string]: string | string[] | undefined; ;
    } */
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
                /* let s: string = url;
                storeOrder(url.query); */
                /*  orders.insertOne(url.query); */
                /* storeOrder(url.query);
                console.log(url.query); */
            }
            if (url.pathname == "/retrieve") {
                jsonString = JSON.stringify(await orders.find().toArray());
                jsonString += "<br>";
                /*                 console.log("AAAAAAAAAAAAAAAAAAA");
                 */ _response.write(jsonString);
            }
            if (url.pathname == "/delete") {
                deleteOrder();
                /* orders.drop(); */
                /* orders.remove({}); */
            }
            /* storeOrder(url.query); */
        }
        _response.end();
    }
    function storeOrder(_url) {
        orders.insertOne(_url);
    }
    function deleteOrder() {
        orders.drop();
    }
    /* async function retrieveOrders(): Promise<string>{
        let auslesen: string = JSON.stringify(await orders.find().toArray());
        return auslesen;
    } */
    /* function deleteORders(): void{
        orders.remove({});
    } */
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=server.js.map