import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";

namespace IceCreamLand {
    interface Bestellung {
        [type: string]: string| string[]| undefined;
    }
    let gettheorder: Bestellung[];
    /* let currentOrder: String; */
    console.log("start");
    let orders: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    
    let databaseUrl: string = "mongodb+srv://cocosailer:qJjLWY@clustergis-nrwvt.mongodb.net/Test?retryWrites=true&w=majority";
    /* let databaseUrl: string = "mongodb://localhost:27017"; */
    
    startServer(port);

    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        console.log("Starting server on port " + _port);        
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port); 
    }
    
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        orders = mongoClient.db("Eis").collection("icecream");
        console.log("Database connection", orders != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
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
                for (let key in url.query) { //auf richtige id zugreifen
                    let value: string = <string>url.query[key]; 
                    /*inspired by https://stackoverflow.com/questions/12901593/remove-record-by-id*/
                    let object: Mongo.ObjectID = new Mongo.ObjectID(value);
                    let deleteOrder: string = JSON.stringify(await orders.deleteOne({"_id": object}));
                    _response.write(deleteOrder);
                }
            }
            if (url.pathname == "/getthemoney") {
                console.log("Geld einsammeln");
                for (let key in url.query) {
                    let value: string = <string>url.query[key]; 
                    let object: Mongo.ObjectID = new Mongo.ObjectID(value);
                    orders.update({"_id": object}, {$set: {"preis" : "I got the money"}});
                }
            }
        }
        _response.end();      
    }
    function storeOrder(_url: ParsedUrlQuery): void {
        orders.insertOne(_url);
    }
    function deleteOrder(): void {
        orders.drop();
    }
}