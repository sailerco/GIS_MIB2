"use strict";
var Aufgabe_8;
(function (Aufgabe_8) {
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    async function buttonclick() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dedflake.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        console.log((await fetch(url)).url);
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=client.js.map