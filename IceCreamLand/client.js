"use strict";
var IceCreamLand;
(function (IceCreamLand) {
    document.getElementById("abgeben").addEventListener("click", senden);
    let sortenstring = JSON.parse(localStorage.getItem("sorten"));
    let toppingstring = JSON.parse(localStorage.getItem("Topping"));
    async function senden() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        /* let url: string = "https://dedflake.herokuapp.com/"  + "button"; */
        let url = "http://localhost:8100/order?" + query.toString() + "&Behaelter=" + localStorage.getItem("Behälter") + "&kugeln=" + localStorage.getItem("kugel");
        for (let i = 0; i <= sortenstring.length - 1; i++) {
            let zahl = i + 1;
            url = url + "&Sorte" + zahl.toString() + "=" + sortenstring[i];
        }
        if (localStorage.getItem("Sauce"))
            url = url + "&Sauce=" + localStorage.getItem("Sauce");
        if (localStorage.getItem("Topping")) {
            for (let i = 0; i <= toppingstring.length - 1; i++) {
                let zahl = i + 1;
                url = url + "&Topping" + zahl.toString() + "=" + toppingstring[i];
            }
        }
        url = url + "&preis=" + localStorage.getItem("preis");
        await fetch(url);
    }
})(IceCreamLand || (IceCreamLand = {}));
//# sourceMappingURL=client.js.map