"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aufgabe_8;
(function (Aufgabe_8) {
    /*  console.log("Starting server");
     let port: number = Number(process.env.PORT);
     if (!port)
       port = 8100; */
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    async function buttonclick() {
        response(await communicate());
    }
    /* let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port); */
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dedflake.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        await fetch(url);
        return url;
    }
    async function response(_url) {
        let response = await fetch(_url);
        let response2 = await response.json();
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
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=servertest.js.map