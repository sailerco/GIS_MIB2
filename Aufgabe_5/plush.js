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
        kategorie2: "Clothing",
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
    //#endregion
    const gsmtSortiment = [eevee, relaxo, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12];
    const plushtag = document.getElementById("shop3");
    for (let i = 0; i <= gsmtSortiment.length - 1; i++) {
        if (gsmtSortiment[i].kategorie2 === "Plush") {
            let div = document.createElement("div"); //new div an #shop3
            div.setAttribute("class", "artikel");
            plushtag.appendChild(div);
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
})(Aufgabe_5 || (Aufgabe_5 = {})); /* if (sortiment2[index].kategorie1) {
                tag2.appendChild(div);
                div.appendChild(img);
                div.appendChild(name).innerHTML = sortiment2[index].name;
                div.appendChild(description).innerHTML = sortiment2[index].description;
                div.appendChild(price).innerHTML = sortiment2[index].price + "€";
                div.appendChild(div2);
                div2.appendChild(img2);
                div2.appendChild(img3);
            } else {
                ;
            } */
/* if (gsmt[index].kategorie[0] == "SW") {
    tag2.appendChild(div);
    div.appendChild(img);
    div.appendChild(name).innerHTML = gsmt[index].name;
    div.appendChild(description).innerHTML = gsmt[index].description;
    div.appendChild(price).innerHTML = gsmt[index].price + "€";
    div.appendChild(img2);
}*/
/* if (sortiment[index].kategorie[1] === "Plush") {
    tag3.appendChild(div);
    div.appendChild(img);
    div.appendChild(name).innerHTML = sortiment[index].name;
    div.appendChild(description).innerHTML = sortiment[index].description;
    div.appendChild(price).innerHTML = sortiment[index].price + "€";
    div.appendChild(div2);
    div2.appendChild(img2);
    div2.appendChild(img3);
}
if (sortiment[index].kategorie[1] === "Home") {
    tag4.appendChild(div);
    div.appendChild(img);
    div.appendChild(name).innerHTML = sortiment[index].name;
    div.appendChild(description).innerHTML = sortiment[index].description;
    div.appendChild(price).innerHTML = sortiment[index].price + "€";
    div.appendChild(div2);
    div2.appendChild(img2);
    div2.appendChild(img3);
}
if (sortiment[index].kategorie[1] === "Clothing") {
    tag5.appendChild(div);
    div.appendChild(img);
    div.appendChild(name).innerHTML = sortiment[index].name;
    div.appendChild(description).innerHTML = sortiment[index].description;
    div.appendChild(price).innerHTML = sortiment[index].price + "€";
    div.appendChild(div2);
    div2.appendChild(img2);
    div2.appendChild(img3);
}  */
/* createTags2();

function createTags2(): void {

    for (let index: number = 0; index < sortiment2.length; index++) {

        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", "artikel");
        
        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("src", sortiment2[index].image);
        img.setAttribute("alt", sortiment2[index].name);

        let name: HTMLHeadingElement = document.createElement("h4");
        name.setAttribute("class", "name");

        let description: HTMLParagraphElement = document.createElement("p");
        description.setAttribute("class", "beschreibung");
        
        let price: HTMLParagraphElement = document.createElement("p");
        price.setAttribute("class", "price");

        let div2: HTMLDivElement = document.createElement("div");
        div2.setAttribute("class", "drop");

        let img2: HTMLImageElement = document.createElement("img");
        img2.setAttribute("src", "cart.png");

        let img3: HTMLImageElement = document.createElement("img");
        img3.setAttribute("src", "heart.png");

        if (sortiment[index].kategorie1 == false) {
            tag2.appendChild(div);
            div.appendChild(img);
            div.appendChild(name).innerHTML = sortiment2[index].name;
            div.appendChild(description).innerHTML = sortiment2[index].description;
            div.appendChild(price).innerHTML = sortiment2[index].price + "€";
            div.appendChild(div2);
            div2.appendChild(img2);
            div2.appendChild(img3);
        }
} */
/* function inhalt(options: Pokemon){
        /* let name = options.name;
        let description = options.description;
        let price = options.price;
        document.getElementsByClassName("eevee").innerHTML; {
            this.price = 7;
            this.name = "Rucksack";
            this.description = "aaaaa";
        }
    } */
/* document.getElementsByClassName("eevee")
let eevee: Pokemon = (name: "pokemon", was: "aaaa", preis: 12);
 
interface AssoArray {
    [name: string]: string;
}*/
/* function inhalt(options: Pokemon){
    let name = options.name;
    let description = options.description;
    let price = options.price;
} */
/* document.getElementsByClassName("eevee");
let eevee: Pokemon = (name: "pokemon", description: "aaaa", price: 12) ; */
/*
    var articel:  [string, string, number];
    document.getElementsByClassName("eevee");
    let eevee: articel = (name: "pokemon", description: "aaaa", price: 12) ; */
/*namespace Aufgabe05 {
    interface ShopArtikel {
        //[key: string]: boolean | string | string | number | string;
        kategorie: boolean;
        name: string;
        image: string;
        preis: number;
        beschreibung: string;
    }

    //#region Sortiment
    let artikel01: ShopArtikel = {
        kategorie: true,
        name: "Herzchen Papier",
        image: "images/herzchenkonfetti.jpg",
        preis: 0.00,
        beschreibung: "Da Liebe für jeden kostenlos sein sollte."
    };

    let artikel02: ShopArtikel = {
        kategorie: true,
        name: "Fancy Papier",
        image: "images/fancypapier.jpg",
        preis: 19.99,
        beschreibung: "Elegantes Papier für die schönen Momente des Lebens."
    };

    let artikel03: ShopArtikel = {
        kategorie: true,
        name: "Kariertes Papier",
        image: "images/kariertespapier.jpg",
        preis: 1.99,
        beschreibung: "Wasserabweisendes Papier für die Tränen in Mathe."
    };

    let artikel04: ShopArtikel = {
        kategorie: true,
        name: "Liniertes Papier",
        image: "images/liniertespapier.png",
        preis: 1.99,
        beschreibung: "Liniertes Papier für die unter uns,<br> die in der Vorlesung noch nicht am Laptop mitschreiben."
    };

    let artikel05: ShopArtikel = {
        kategorie: true,
        name: "Ganz viel Papier",
        image: "images/vielpapier.jpg",
        preis: 99.99,
        beschreibung: "Ein Lebensvorrat an Papier."
    };

    let artikel06: ShopArtikel = {
        kategorie: true,
        name: "Toiletten Papier",
        image: "images/toilettenpapier.jpg",
        preis: 10.00,
        beschreibung: "Wolkig-weich für deinen wertvollen Allerwehrtesten."
    };

    let artikel07: ShopArtikel = {
        kategorie: true,
        name: "Ein Koffer voll Toiletten Papier",
        image: "images/einkofferklopapier.jpg",
        preis: 9999999.99,
        beschreibung: "Kannst du dir so viel kacken überhaupt leisten?"
    };

    let artikel08: ShopArtikel = {
        kategorie: false,
        name: "Tinten Papier",
        image: "images/federpapier.jpg",
        preis: 9.99, beschreibung: "Deine Brieftaube wird sich freuen."
    };

    let artikel09: ShopArtikel = {
        kategorie: false,
        name: "Brief Papier",
        image: "images/briefpapier.jpg",
        preis: 4.99,
        beschreibung: "Ein romantischer Brief für deine/n Liebste/n."
    };

    let artikel10: ShopArtikel = {
        kategorie: false,
        name: "Müll",
        image: "images/m%C3%BCll.jpg",
        preis: 0.20,
        beschreibung: "Unsere Low-Budget Alternative für den kleinen Geldbeutel."
    };

    let artikel11: ShopArtikel = {
        kategorie: false,
        name: "Gefaltetes Papier",
        image: "images/gefaltetespapier.jpg",
        preis: 2.99,
        beschreibung: "Wir haben schonmal angefangen mit dem Papierflieger."
    };

    let artikel12: ShopArtikel = {
        kategorie: false,
        name: "Zeitungs Papier",
        image: "images/zeitungspapier.jpg",
        preis: 14.99,
        beschreibung: "Die aktuellsten News über den 2. Weltkrieg."
    };

    let artikel13: ShopArtikel = {
        kategorie: false,
        name: "Kaffee Papier",
        image: "images/kaffeepapier.jpg",
        preis: 0.50,
        beschreibung: "Da hat der Praktikant seinen Kaffee umgeschmissen."
    };

    let artikel14: ShopArtikel = {
        kategorie: false,
        name: "Blumen Papier",
        image: "images/rosenpapier.jpg",
        preis: 7.99,
        beschreibung: "Der Geruch alter Bücher vermischt <br> mit dem Duft einer jungen Rose."
    };
    //#endregion

    const sortiment: ShopArtikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12, artikel13, artikel14];

    //DOM-Manipulation

    const newTag: HTMLElement = document.getElementById("new") as HTMLDivElement;
    const oldTag: HTMLElement = document.getElementById("old") as HTMLDivElement;

    createTags();
    
    function createTags(): void {

        for (let index: number = 0; index < sortiment.length; index++) {

            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "imgcontainer");
            
            let h3: HTMLHeadingElement = document.createElement("h3");

            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", sortiment[index].image);
            img.setAttribute("alt", sortiment[index].name);

            let pPrice: HTMLParagraphElement = document.createElement("p");
            pPrice.setAttribute("class", "price");

            let pDescription: HTMLParagraphElement = document.createElement("p");
            pDescription.setAttribute("class", "beschreibung");

            let button: HTMLButtonElement = document.createElement("button");
    
            if (sortiment[index].kategorie) { //hängt an id="new" an
    
                newTag.appendChild(div);

                div.appendChild(h3);
                div.appendChild(img);
                div.appendChild(pPrice).innerHTML = "Preis: " + sortiment[index].preis + "€";
                div.appendChild(pDescription).innerHTML = sortiment[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Einkaufswagen";

            }
            else { //hängt an id="old" an
    
                oldTag.appendChild(div);

                div.appendChild(h3);
                div.appendChild(img);
                div.appendChild(pPrice).innerHTML = "Preis: " + sortiment[index].preis + "€";
                div.appendChild(pDescription).innerHTML = sortiment[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Einkaufswagen";

            }
        }
    }
    
    

}

*/ 
//# sourceMappingURL=plush.js.map