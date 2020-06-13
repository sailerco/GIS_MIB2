"use strict";
var Aufgabe_7;
(function (Aufgabe_7) {
    const warenkorb = document.getElementById("artikelkorb");
    let anzahl = parseInt(localStorage.getItem("zahl"));
    let product;
    let c = document.createElement("p");
    if (localStorage.getItem("artikel")) {
        product = JSON.parse(localStorage.getItem("artikel"));
        for (let i = 0; i < anzahl; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "artikel");
            div.setAttribute("id", "artikel" + i);
            warenkorb.appendChild(div);
            let img = document.createElement("img");
            img.setAttribute("src", product[i].image);
            img.setAttribute("alt", product[i].name);
            div.appendChild(img);
            let name = document.createElement("p"); //Artikelname
            name.setAttribute("class", "name");
            div.appendChild(name).innerHTML = product[i].name;
            let description = document.createElement("p");
            description.setAttribute("class", "description");
            div.appendChild(description).innerHTML = product[i].description;
            let price = document.createElement("p");
            price.setAttribute("class", "preis");
            div.appendChild(price).innerHTML = product[i].price + "€";
            let button1 = document.createElement("button");
            button1.innerHTML = "Löschen";
            button1.setAttribute("class", "button1");
            button1.addEventListener("click", loeschenArtikel);
            div.appendChild(button1);
            warenkorb.appendChild(div);
            /* if (i > 0) {
                for (let x: number = 0; x < i; x++) {
                    if (product[i] === product[x]) {
                        let anzahlx: HTMLParagraphElement = document.createElement("p");
                        document.getElementById("artikel" + x)!.appendChild(anzahlx).innerHTML = "Mehr als ein Mal im Warenkorb";
                        document.getElementById("artikel" + i)!.remove();
                    }
                }
            } */
            function loeschenArtikel(_eventbutton) {
                //neue Preisberechnung
                let kostet = parseInt(localStorage.getItem("kostet"));
                localStorage.setItem("kostet", kostet.toString());
                c.innerHTML = "Gesamtpreis: " + kostet + "€";
                kostet -= product[i].price;
                anzahl -= 1;
                localStorage.setItem("zahl", anzahl.toString());
                localStorage.removeItem("artikel"[i]);
                div.remove();
                delete product[i];
                localStorage.setItem("artikel", JSON.stringify(product));
            }
        }
    }
    //Preis
    if (localStorage.getItem("kostet")) {
        document.getElementById("ware").appendChild(c);
        c.innerHTML = "Gesamtpreis: " + localStorage.getItem("kostet") + "€";
        let button = document.createElement("button");
        button.innerHTML = "Löschen";
        button.setAttribute("class", "button");
        button.addEventListener("click", loeschen);
        let div = document.createElement("div");
        div.setAttribute("id", "löschen");
        document.getElementById("ware").appendChild(div);
        document.getElementById("löschen").appendChild(button);
    }
    function loeschen(_eventbutton) {
        c.innerHTML = "Gesamtpreis: 0€";
        while (warenkorb.hasChildNodes()) {
            warenkorb.removeChild(warenkorb.firstChild);
        }
        localStorage.clear();
    }
})(Aufgabe_7 || (Aufgabe_7 = {}));
//# sourceMappingURL=wagen.js.map