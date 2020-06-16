"use strict";
//import * as Http from "http";
var Aufgabe_8;
(function (Aufgabe_8) {
    console.log("Starting server");
    /* let port: number = Number(process.env.PORT);
    if (!port)
       port = 8100;  */
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    async function urlbekommen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dedflake.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        return url;
    }
    async function buttonclick() {
        Response(await urlbekommen());
    }
    /* let server: Http.Server = Http.createServer(); */
    /* server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);  */
    /* async function communicate(): Promise<string> {
       let formData: FormData = new FormData(document.forms[0]);
       let url: string = "https://dedflake.herokuapp.com/";
       let query: URLSearchParams = new URLSearchParams(<any>formData);
       url += url + "?" + query.toString();
       await fetch(url);
       return url;
     } */
    /*  async function response(_url: RequestInfo): Promise<void> { //asynchron damit await fetch benutzt werden kann
        let response: Response = await fetch(_url);
        let response2: string = await response.json();
        console.log(response2);
    } */
    async function Response(_url /*_response: Http.ServerResponse */) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        console.log(response2);
        /* _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
      
        _response.write(_url);
      
        _response.end();  */
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=servertest.js.map