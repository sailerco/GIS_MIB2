import * as Http from "http";

namespace Aufgabe_8 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;
  let formData: FormData = new FormData(document.forms[0]);
   /* console.log(formData.get("fname"));
  let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
  button.addEventListener("click", buttonclick); 

  function buttonclick(): void {
    console.log("button");
  } */
  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);
  
  function handleListen(): void {
    console.log("Listening");
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices!");
    
    let url: string = "https://dedflake.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += url + "?" + query.toString(); 
    await fetch(url);
    console.log(url);

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
}