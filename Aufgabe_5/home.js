"use strict";
var Aufgabe_5;
(function (Aufgabe_5) {
    let eevee = {
        kategorie1: true,
        kategorie2: "Clothing",
        name: "Evoli Rucksack",
        image: "poke/bag.jpg",
        price: 20,
        description: "Rucksack - Evoli Design"
    };
    let relaxo = {
        kategorie1: true,
        kategorie2: "Home",
        name: "Relaxo Sitzsack",
        image: "poke/beanbag.jpg",
        price: 100,
        description: "1,20m, weich, Relaxo"
    };
    let a3 = {
        kategorie1: true,
        kategorie2: "Clothing",
        name: "Detektiv Pikachu",
        image: "poke/cap.jpg",
        price: 15,
        description: "Mütze mit Pikachu Ohren"
    };
    let a4 = {
        kategorie1: true,
        kategorie2: "Clothing",
        name: "Zurrokex Mütze",
        image: "poke/cap2.jpg",
        price: 15,
        description: "Mütze im Zurrokex Design"
    };
    let a5 = {
        kategorie1: true,
        kategorie2: "Home",
        name: "Evoli Figuren",
        image: "poke/eevee.jpg",
        price: 20,
        description: "Evolis sind abnehmbar"
    };
    let a6 = {
        kategorie1: true,
        kategorie2: "Home",
        name: "Gengar Tasse",
        image: "poke/mug.jpg",
        price: 7,
        description: "Lila Tasse mit Gengars Gesicht"
    };
    let a7 = {
        kategorie1: true,
        kategorie2: "Plush",
        name: "Relaxo Plüschtier",
        image: "poke/plush1.jpg",
        price: 15,
        description: "Sehr weiches Relaxo"
    };
    let a8 = {
        kategorie1: true,
        kategorie2: "Plush",
        name: "Wolly Plüschtier",
        image: "poke/plush2.jpg",
        price: 15,
        description: "Sehr weiches Wolly"
    };
    let a9 = {
        kategorie1: true,
        kategorie2: "Plush",
        name: "Pikachu Plüschtier",
        image: "poke/plush3.jpg",
        price: 20,
        description: "Pikachu macht sein Abschluss"
    };
    let a10 = {
        kategorie1: true,
        kategorie2: "Plush",
        name: "Ditto Plüschtier",
        image: "poke/plush4.jpg",
        price: 15,
        description: "Passt zu jeder Einrichtung"
    };
    let a11 = {
        kategorie1: true,
        kategorie2: "Home",
        name: "Poké-Ball Schüssel",
        image: "poke/pokego.png",
        price: 15,
        description: "Spülmaschinengeeignet"
    };
    let a12 = {
        kategorie1: true,
        kategorie2: "Home",
        name: "Poster",
        image: "poke/poster.jpg",
        price: 15,
        description: "Gen 1 Poster"
    };
    // sw artikel
    let sw1 = {
        kategorie1: false,
        kategorie2: "Clothing",
        name: "Yoda Rucksack",
        image: "sw/babybag.jpg",
        price: 30,
        description: "Kinderrucksack"
    };
    let sw2 = {
        kategorie1: false,
        kategorie2: "Plush",
        name: "Baby Yoda",
        image: "sw/babyyoda.jpg",
        price: 40,
        description: "Perfekte Einrichtung"
    };
    let sw3 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "BB8 Brotdose",
        image: "sw/brotdose-bb-8.jpg",
        price: 15,
        description: "Luftdicht"
    };
    let sw4 = {
        kategorie1: false,
        kategorie2: "Clothing",
        name: "Ewok Rucksack",
        image: "sw/ewokbag.jpg",
        price: 30,
        description: "Sehr flauschig"
    };
    let sw5 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "Lichtschwert",
        image: "sw/lightsaber.jpg",
        price: 150,
        description: "RGB!"
    };
    let sw6 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "Tasse D-O",
        image: "sw/mug.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw7 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "Tasse BB8",
        image: "sw/mug2.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw8 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "Tasse Porg",
        image: "sw/porg.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw9 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "R2D2 Kaffekanne",
        image: "sw/coffee.jpg",
        price: 30,
        description: "Spülmaschinengeeignet"
    };
    let sw10 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "R2D2 Reiskocher",
        image: "sw/Pot.jpg",
        price: 90,
        description: "Ant-Haft-Beschichtet"
    };
    let sw11 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "Darth Vader Toaster",
        image: "sw/toaster.jpg",
        price: 30,
        description: "Perfekt für jedes Frühstück"
    };
    let sw12 = {
        kategorie1: false,
        kategorie2: "Home",
        name: "Star Wars Waffeleisen",
        image: "sw/waffels.jpg",
        price: 30,
        description: "Todesstern Waffeln!"
    };
    const gsmtSortiment = [eevee, relaxo, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12];
    const hometag = document.getElementById("shop4");
    for (let i = 0; i <= gsmtSortiment.length - 1; i++) {
        if (gsmtSortiment[i].kategorie2 === "Home") {
            let div = document.createElement("div"); //new div an #shop4
            div.setAttribute("class", "artikel");
            hometag.appendChild(div);
            let img = document.createElement("img"); //bild 
            img.setAttribute("src", gsmtSortiment[i].image);
            img.setAttribute("alt", gsmtSortiment[i].name);
            div.appendChild(img);
            let name = document.createElement("p"); //Artikelname
            name.setAttribute("class", "atikelname");
            div.appendChild(name).innerHTML = gsmtSortiment[i].name;
            let description = document.createElement("p");
            description.setAttribute("class", "beschreibung");
            div.appendChild(description).innerHTML = gsmtSortiment[i].description;
            let price = document.createElement("p");
            price.setAttribute("class", "price");
            div.appendChild(price).innerHTML = gsmtSortiment[i].price + "€";
            let div2 = document.createElement("div"); //neue div die dropt
            div2.setAttribute("class", "drop");
            div.appendChild(div2);
            let img2 = document.createElement("img");
            img2.setAttribute("src", "cart.png");
            img.setAttribute("alt", "cart");
            div2.appendChild(img2);
            let img3 = document.createElement("img");
            img3.setAttribute("src", "heart.png");
            img.setAttribute("alt", "heart");
            div2.appendChild(img3);
        }
    }
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=home.js.map