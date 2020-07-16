import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";

namespace IceCreamLand {
    interface Bestellung{
        [type: string]: string| string[]| undefined;
    }
    let gettheorder: Bestellung[];
    /* let currentOrder: String; */
    console.log("start");
    let orders: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    
    /* let databaseUrl: string = "mongodb+srv://cocosailer:qJjLWY@clustergis-nrwvt.mongodb.net/Test?retryWrites=true&w=majority"; */
    let databaseUrl: string = "mongodb://localhost:27017";
    
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
            console.log("AAAAAAAAA");
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            /* let jsonString: string; */
            console.log(url);
            if (url.pathname == "/order") {
                /* console.log("aa");
                console.log(url.query); */
                for(let key in url.query){
                    _response.write(key + ":" + url.query[key]);
                    console.log("log:" + key + "" + url.query[key]);
                }
                storeOrder(url.query);
                
            }
            if (url.pathname == "/retrieve") {
                console.log("AAAAAAAAAA");
                gettheorder = await orders.find().toArray();
                console.log(gettheorder);
                _response.write(JSON.stringify(gettheorder));
            
            }
            if (url.pathname == "/delete") {
                deleteOrder();
            }
            if (url.pathname == "/deleteOne") {
                let urli: Bestellung = <Bestellung> url.query;
                for (let key in urli) {
                    /* let id: string = key; */
                    let value: string = <string>urli[key]; 
                    let object: Mongo.ObjectID = new Mongo.ObjectID(value);
                    let deleteOrder: string = JSON.stringify(await orders.deleteOne({"_id": object}));
                    console.log("bto" + deleteOrder);
                    _response.write(deleteOrder);
                }
            }
            if (url.pathname == "/getthemoney") {
                let urli: Bestellung = <Bestellung> url.query;
                for (let key in urli) {
                    /* let id: string = key; */
                    let value: string = <string>urli[key]; 
                    let object: Mongo.ObjectID = new Mongo.ObjectID(value);
                    orders.update({"_id": object}, {$set:{"preis" : "I got the money"}});
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