"use strict";
var Aufgabe_9;
(function (Aufgabe_9) {
    document.getElementById("button").addEventListener("click", buttonclick);
    /* let url: string = "https://dedflake.herokuapp.com/"; */
    async function buttonclick() {
        let url = "https://dedflake.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "html" + "?" + query.toString(); //maybe broken
        let response = await fetch(url);
        let reply = await response.text();
        let paragraph = document.createElement("p");
        paragraph.innerHTML = reply;
        document.body.appendChild(paragraph);
    }
    document.getElementById("jsonbutton").addEventListener("click", jsonclick);
    async function jsonclick() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dedflake.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "json" + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=client2.js.map