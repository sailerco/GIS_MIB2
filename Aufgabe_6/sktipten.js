"use strict";
var Aufgabe_6;
(function (Aufgabe_6) {
    let eevee = { kategorie: true, name: "Evoli Rucksack", image: "poke/bag.jpg", description: "Rucksack - Evoli Design", price: 20 };
    let relaxo = { kategorie: true, name: "Relaxo Sitzsack", image: "poke/beanbag.jpg", description: "1,20m, weich, Relaxo", price: 100 };
    let a3 = { kategorie: true, name: "Detektiv Pikachu", image: "poke/cap.jpg", description: "Mütze mit Pikachu Ohren", price: 15 };
    let a4 = { kategorie: true, name: "Zurrokex Mütze", image: "poke/cap2.jpg", description: "Mütze im Zurrokex Design", price: 15 };
    let a5 = { kategorie: true, name: "Evoli Figuren", image: "poke/eevee.jpg", description: "Evolis sind abnehmbar", price: 20 };
    let a6 = { kategorie: true, name: "Gengar Tasse", image: "poke/mug.jpg", description: "Lila Tasse mit Gengars Gesicht", price: 7 };
    let a7 = { kategorie: true, name: "Relaxo Plüschtier", image: "poke/plush1.jpg", description: "Sehr weiches Relaxo", price: 15 };
    let a8 = { kategorie: true, name: "Wolly Plüschtier", image: "poke/plush2.jpg", description: "Sehr weiches Wolly", price: 15 };
    let a9 = { kategorie: true, name: "Pikachu Plüschtier", image: "poke/plush3.jpg", description: "Pikachu macht sein Abschluss", price: 20 };
    let a10 = { kategorie: true, name: "Ditto Plüschtier", image: "poke/plush4.jpg", description: "Passt zu jeder Einrichtung", price: 15 };
    let a11 = { kategorie: true, name: "Poké-Ball Schüssel", image: "poke/pokego.png", description: "Spülmaschinengeeignet", price: 15 };
    let a12 = { kategorie: true, name: "Poster", image: "poke/poster.jpg", description: "Gen 1 Poster", price: 15 };
    let sw1 = { kategorie: false, name: "Yoda Rucksack", image: "sw/babybag.jpg", description: "Kinderrucksack", price: 30 };
    let sw2 = { kategorie: false, name: "Baby Yoda", image: "sw/babyyoda.jpg", description: "Perfekte Einrichtung", price: 40 };
    let sw3 = { kategorie: false, name: "BB8 Brotdose", image: "sw/brotdose-bb-8.jpg", description: "Luftdicht", price: 15 };
    let sw4 = { kategorie: false, name: "Ewok Rucksack", image: "sw/ewokbag.jpg", description: "Sehr flauschig", price: 30 };
    let sw5 = { kategorie: false, name: "Lichtschwert", image: "sw/lightsaber.jpg", description: "RGB!", price: 150 };
    let sw6 = { kategorie: false, name: "Tasse D-O", image: "sw/mug.jpg", description: "Spülmaschinengeeignet", price: 7 };
    let sw7 = { kategorie: false, name: "Tasse BB8", image: "sw/mug2.jpg", description: "Spülmaschinengeeignet", price: 7 };
    let sw8 = { kategorie: false, name: "Tasse Porg", image: "sw/porg.jpg", description: "Spülmaschinengeeignet", price: 7 };
    let sw9 = { kategorie: false, name: "R2D2 Kaffekanne", image: "sw/coffee.jpg", description: "Spülmaschinengeeignet", price: 30 };
    let sw10 = { kategorie: false, name: "R2D2 Reiskocher", image: "sw/Pot.jpg", description: "Ant-Haft-Beschichtet", price: 90 };
    let sw11 = { kategorie: false, name: "Darth Vader Toaster", image: "sw/toaster.jpg", description: "Perfekt für jedes Frühstück", price: 30 };
    let sw12 = { kategorie: false, name: "Star Wars Waffeleisen", image: "sw/waffels.jpg", description: "Todesstern Waffeln!", price: 30 };
    //#enderegion
    const pokemonartikel = [eevee, relaxo, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12];
    const poke = document.getElementById("shop1");
    const swtag = document.getElementById("shop2");
    const cart1 = document.getElementById("count");
    const pokemon = document.getElementById("pokelogo");
    const sw = document.getElementById("swlogo");
    const pokep = document.getElementById("poke");
    const swp = document.getElementById("sw");
    //#region for schleife Atikel generieren
    let c = document.createElement("p");
    let z = 0;
    let kostet = 0;
    for (let i = 0; i <= pokemonartikel.length - 1; i++) {
        let div = document.createElement("div"); //new div an #shop1
        div.setAttribute("class", "artikel");
        if (pokemonartikel[i].kategorie)
            poke.appendChild(div);
        else
            swtag.appendChild(div);
        let img = document.createElement("img"); //bild 
        img.setAttribute("src", pokemonartikel[i].image);
        img.setAttribute("alt", pokemonartikel[i].name);
        div.appendChild(img);
        let name = document.createElement("p"); //Artikelname
        name.setAttribute("class", "atikelname");
        div.appendChild(name).innerHTML = pokemonartikel[i].name;
        let description = document.createElement("p");
        description.setAttribute("class", "beschreibung");
        div.appendChild(description).innerHTML = pokemonartikel[i].description;
        let price = document.createElement("p");
        price.setAttribute("class", "price");
        div.appendChild(price).innerHTML = pokemonartikel[i].price + "€";
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
        pokemon.addEventListener("click", pokclick);
        sw.addEventListener("click", swclick);
        function pokclick() {
            if (pokemonartikel[i].kategorie == false) {
                swtag.style.display = "none";
                swp.style.display = "none";
                poke.style.display = "flex";
                pokep.style.display = "block";
            }
        }
        function swclick() {
            if (pokemonartikel[i].kategorie == true) {
                poke.style.display = "none";
                pokep.style.display = "none";
                swtag.style.display = "flex";
                swp.style.display = "block";
            }
        }
        function cart() {
            z++;
            if (z > 0) {
                cart1.style.display = "block";
            }
            let a = "" + z;
            cart1.appendChild(c).innerHTML = a;
            kostet = kostet + pokemonartikel[i].price;
            console.log("Preis: " + kostet + "€");
        }
    }
    //#endregion
})(Aufgabe_6 || (Aufgabe_6 = {}));
//# sourceMappingURL=sktipten.js.map