import * as Http from "http";

namespace Aufgabe_8 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }
  let formData: FormData = new FormData(document.forms[0]);
    
  for (let entry of formData) {
    console.log(entry);
    console.log("name: " + entry[0]);
    console.log("value: " + entry[1]);
  }
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log(port);
    console.log(formData.get("fname"));
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
  
}