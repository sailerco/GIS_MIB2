import * as Http from "http";
import { url } from "inspector";
//import * as Url from "url";

namespace Aufgabe_8 {
  console.log("Starting server"); //Ausgabe 
  let port: number = Number(process.env.PORT); //WElchem Port der Server zuhören soll
  if (!port)
    port = 8100; //Port wird Nummer 8100 zugewiesen
  let server: Http.Server = Http.createServer(); //server erstellen
  server.addListener("request", handleRequest); 
  server.addListener("listening", handleListen);
  server.listen(port); //server wird gesagt er soll port 8100 zuhören
  
  function handleListen(): void {
    console.log("Listening"); //ausgabe
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void{
    console.log("I hear voices!"); //ausgabe
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);
    console.log(url);

    _response.end();
  } 
}