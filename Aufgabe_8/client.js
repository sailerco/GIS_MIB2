"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exports.Aufgabe_8 = void 0;
var Aufgabe_8;
(function (Aufgabe_8) {
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    async function buttonclick() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dedflake.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        console.log((await fetch(url)).url);
    }
})(Aufgabe_8 = exports.Aufgabe_8 || (exports.Aufgabe_8 = {}));
//# sourceMappingURL=client.js.map