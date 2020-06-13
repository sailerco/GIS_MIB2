"use strict";
var Aufgabe_7;
(function (Aufgabe_7) {
    communicate("side.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe_7.pokemonartikel = await response.json();
        Aufgabe_7.artikel();
    }
    Aufgabe_7.communicate = communicate;
})(Aufgabe_7 || (Aufgabe_7 = {}));
//# sourceMappingURL=interface.js.map