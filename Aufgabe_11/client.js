"use strict";
var Aufgabe_11;
(function (Aufgabe_11) {
    document.getElementById("button").addEventListener("click", senden);
    async function senden() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://dedflake.herokuapp.com/" + "button";
        /* let url: string = "http://localhost:8100/" + "button"; */
        url = url + "?" + query.toString();
        await fetch(url);
        /* let form: HTMLFormElement = <HTMLFormElement> document.getElementById("form");
        form.reset(); */
    }
    document.getElementById("jsonbutton").addEventListener("click", show);
    async function show() {
        let url = "https://dedflake.herokuapp.com/" + "jsonbutton";
        /*  let url: string = "http://localhost:8100/" + "jsonbutton"; */
        let response = await fetch(url);
        let reply = await response.text();
        let paragraph = document.createElement("p");
        /* if(reply.length == 2){
            paragraph.innerHTML = "Nein";
        }
        else{ */
        paragraph.innerHTML = reply;
        /* } */
        document.body.appendChild(paragraph);
    }
    document.getElementById("aaa").addEventListener("click", deleteall);
    async function deleteall() {
        let url = "http://localhost:8100/" + "aaa";
        let response = await fetch(url);
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Datenbank ist leer";
        document.body.appendChild(paragraph);
    }
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=client.js.map