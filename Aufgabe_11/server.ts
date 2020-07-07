import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { count } from "console";

namespace Aufgabe_11 {
    interface Formular {
        [type: string]: string | string[] | undefined;
    }
    console.log("start");
    let orders: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    
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

        orders = mongoClient.db("Test").collection("Students");
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
            let jsonString: string;
            
            if(url.pathname == "/button") {
                storeOrder(url.query);
                console.log(url.query);
            }
            if(url.pathname == "/jsonbutton"){
                if(!orders.find()){
                    jsonString = "Die Datenbank ist noch leer";
                    console.log("why ist this");
                }else{
                jsonString = JSON.stringify(await orders.find().toArray());
                jsonString += "<br>";
                }
                _response.write(jsonString);
            }
            if(url.pathname == "/aaa"){
                orders.drop();
                /* orders.remove({}); */
            }
            
        
            /* storeOrder(url.query); */
        
        }
        _response.end();      
    }
    function storeOrder(_order: Formular): void {
        orders.insertOne(_order);
    }
    /* function deleteORders(): void{
        orders.remove({});
    } */
}