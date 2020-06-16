import * as Http from "http";

namespace Aufgabe_8 {
 /*  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100; */
  let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
  button.addEventListener("click", buttonclick);

  async function buttonclick(): Promise<void> {
    response(await communicate());
  }
  /* let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port); */
  
  async function communicate(): Promise<string> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://dedflake.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += url + "?" + query.toString();
    await fetch(url);
    return url;
  }

  async function response(_url: RequestInfo): Promise<void> { //asynchron damit await fetch benutzt werden kann 
    let response: Response = await fetch(_url);
    let response2:string = await response.json();
    console.log(response2);
}

  /* function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  } */
}