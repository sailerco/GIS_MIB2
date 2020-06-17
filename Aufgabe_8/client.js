"use strict";
var Aufgabe_8;
(function (Aufgabe_8) {
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    async function urlAendern() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dedflake.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        await fetch(url);
        return url;
    }
    async function buttonclick() {
        get(await urlAendern());
    }
    async function get(_url) {
        let response = await fetch(_url);
        let response2 = await response.text();
        console.log("Response", response2);
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=client.js.map