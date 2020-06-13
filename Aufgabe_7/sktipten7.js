"use strict";
var Aufgabe_7;
(function (Aufgabe_7) {
    const poke = document.getElementById("shop1");
    const swtag = document.getElementById("shop2");
    const cart1 = document.getElementById("count");
    const pokemon = document.getElementById("pokelogo");
    const sw = document.getElementById("swlogo");
    const pokep = document.getElementById("poke");
    const swp = document.getElementById("sw");
    const home = document.getElementById("home");
    //#region for schleife Atikel generieren
    let c = document.createElement("p");
    let z = 0;
    let kostet = 0;
    let product;
    function artikel() {
        for (let i = 0; i <= Aufgabe_7.pokemonartikel.length - 1; i++) {
            let div = document.createElement("div"); //new div an #shop1
            div.setAttribute("class", "artikel");
            if (Aufgabe_7.pokemonartikel[i].kategorie)
                poke.appendChild(div);
            else
                swtag.appendChild(div);
            let img = document.createElement("img"); //bild 
            img.setAttribute("src", Aufgabe_7.pokemonartikel[i].image);
            img.setAttribute("alt", Aufgabe_7.pokemonartikel[i].name);
            div.appendChild(img);
            let name = document.createElement("p"); //Artikelname
            name.setAttribute("class", "atikelname");
            div.appendChild(name).innerHTML = Aufgabe_7.pokemonartikel[i].name;
            let description = document.createElement("p");
            description.setAttribute("class", "beschreibung");
            div.appendChild(description).innerHTML = Aufgabe_7.pokemonartikel[i].description;
            let price = document.createElement("p");
            price.setAttribute("class", "price");
            div.appendChild(price).innerHTML = Aufgabe_7.pokemonartikel[i].price + "€";
            let div2 = document.createElement("div"); //neue div die dropt
            div2.setAttribute("class", "drop");
            div.appendChild(div2);
            let img2 = document.createElement("img");
            img2.setAttribute("src", "cart.png");
            img2.setAttribute("alt", "cart");
            div2.appendChild(img2);
            img2.addEventListener("click", cart);
            let img3 = document.createElement("img");
            img3.setAttribute("src", "heart.png");
            img3.setAttribute("alt", "heart");
            div2.appendChild(img3);
            function cart() {
                z++;
                if (z > 0) {
                    cart1.style.display = "block";
                }
                let a = "" + z;
                cart1.appendChild(c).innerHTML = a;
                localStorage.setItem("zahl", a);
                if (product) {
                    product.push(Aufgabe_7.pokemonartikel[i]);
                }
                else {
                    product = [Aufgabe_7.pokemonartikel[i]];
                }
                localStorage.setItem("artikel", JSON.stringify(product));
                kostet = kostet + Aufgabe_7.pokemonartikel[i].price;
                console.log("Preis: " + kostet + "€");
                localStorage.setItem("kostet", kostet.toString());
            }
        }
        //#endregion
        pokemon.addEventListener("click", pokclick);
        sw.addEventListener("click", swclick);
        home.addEventListener("click", homeclick);
        function homeclick() {
            swtag.style.display = "flex";
            swp.style.display = "block";
            poke.style.display = "flex";
            pokep.style.display = "block";
        }
        function pokclick() {
            swtag.style.display = "none";
            swp.style.display = "none";
            poke.style.display = "flex";
            pokep.style.display = "block";
        }
        function swclick() {
            poke.style.display = "none";
            pokep.style.display = "none";
            swtag.style.display = "flex";
            swp.style.display = "block";
        }
    }
    Aufgabe_7.artikel = artikel;
})(Aufgabe_7 || (Aufgabe_7 = {}));
//# sourceMappingURL=sktipten7.js.map