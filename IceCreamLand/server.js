"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var IceCreamLand;
(function (IceCreamLand) {
    let gettheorder;
    /* let currentOrder: String; */
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
        orders = mongoClient.db("Eis").collection("icecream");
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
            console.log(url);
            if (url.pathname == "/order") {
                console.log("Daten aufnehmen");
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key]);
                }
                storeOrder(url.query);
            }
            if (url.pathname == "/retrieve") {
                console.log("Daten zurückgeben");
                gettheorder = await orders.find().toArray();
                console.log(gettheorder);
                _response.write(JSON.stringify(gettheorder));
            }
            if (url.pathname == "/delete") {
                console.log("Datenbank löschen");
                deleteOrder();
            }
            if (url.pathname == "/deleteOne") {
                console.log("Bestimme id aus der Datenbank entfernen");
                /* let urli: Bestellung = <Bestellung> url.query; */
                for (let key in url.query) { //auf richtige id zugreifen
                    let value = url.query[key];
                    /*inspired by https://stackoverflow.com/questions/12901593/remove-record-by-id*/
                    let object = new Mongo.ObjectID(value);
                    let deleteOrder = JSON.stringify(await orders.deleteOne({ "_id": object }));
                    _response.write(deleteOrder);
                }
            }
            if (url.pathname == "/getthemoney") {
                /* let urli: Bestellung = <Bestellung> url.query; */
                console.log("Geld einsammeln");
                for (let key in url.query) {
                    let value = url.query[key];
                    let object = new Mongo.ObjectID(value);
                    orders.update({ "_id": object }, { $set: { "preis": "I got the money" } });
                }
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
})(IceCreamLand || (IceCreamLand = {}));
//# sourceMappingURL=server.js.map