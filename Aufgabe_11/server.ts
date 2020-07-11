import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";

namespace Aufgabe_11 {
    /* interface Formular {
        [type: string]: string | string[] | undefined; ;
    } */
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

        orders = mongoClient.db("Test").collection("dudes");
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
 */             _response.write(jsonString);
            }
            if (url.pathname == "/delete"){
                deleteOrder();
                /* orders.drop(); */
                /* orders.remove({}); */
            }
            
        
            /* storeOrder(url.query); */
        
        }
        _response.end();      
    }
    function storeOrder(_url: ParsedUrlQuery): void {
        orders.insertOne(_url);
    }
    function deleteOrder(): void {
        orders.drop();
    }
    /* async function retrieveOrders(): Promise<string>{
        let auslesen: string = JSON.stringify(await orders.find().toArray());
        return auslesen;
    } */
    
    /* function deleteORders(): void{
        orders.remove({});
    } */
}