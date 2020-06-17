import * as Http from "http";
//import * as Url from "url";

namespace Aufgabe_8 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;
  let formData: FormData = new FormData(document.forms[0]);
  console.log(formData.get("fname"));
  let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
  button.addEventListener("click", buttonclick); 

  function buttonclick(): void {
    console.log("button");
  } 
  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);
  
  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void{
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
}