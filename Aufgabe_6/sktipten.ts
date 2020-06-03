namespace Aufgabe_6 {
    //#region Produkte 
    interface Pokestar {
        kategorie: boolean; //true = pokemon
        name: string;
        image: string;
        description: string;
        price: number;
    }
    let eevee: Pokestar = {
        kategorie: true,
        name: "Evoli Rucksack",
        image: "poke/bag.jpg",
        description: "Rucksack - Evoli Design",
        price: 20
    };
    let relaxo: Pokestar = {
        kategorie: true,
        name: "Relaxo Sitzsack",
        image: "poke/beanbag.jpg",
        description: "1,20m, weich, Relaxo",
        price: 100
    };
    let a3: Pokestar = {
        kategorie: true,
        name: "Detektiv Pikachu",
        image: "poke/cap.jpg",
        description: "Mütze mit Pikachu Ohren",
        price: 15
    };
    let a4: Pokestar = {
        kategorie: true,
        name: "Zurrokex Mütze",
        image: "poke/cap2.jpg",
        description: "Mütze im Zurrokex Design",
        price: 15
    };
    let a5: Pokestar = {
        kategorie: true,
        name: "Evoli Figuren",
        image: "poke/eevee.jpg",
        description: "Evolis sind abnehmbar",
        price: 20
    };
    let a6: Pokestar = {
        kategorie: true,
        name: "Gengar Tasse",
        image: "poke/mug.jpg",
        description: "Lila Tasse mit Gengars Gesicht",
        price: 7
    };
    let a7: Pokestar = {
        kategorie: true,
        name: "Relaxo Plüschtier",
        image: "poke/plush1.jpg",
        description: "Sehr weiches Relaxo",
        price: 15
    };
    let a8: Pokestar = {
        kategorie: true,
        name: "Wolly Plüschtier",
        image: "poke/plush2.jpg",
        price: 15,
        description: "Sehr weiches Wolly"
    };
    let a9: Pokestar = {
        kategorie: true,
        name: "Pikachu Plüschtier",
        image: "poke/plush3.jpg",
        price: 20,
        description: "Pikachu macht sein Abschluss"
    };
    let a10: Pokestar = {
        kategorie: true,
        name: "Ditto Plüschtier",
        image: "poke/plush4.jpg",
        price: 15,
        description: "Passt zu jeder Einrichtung"
    };
    let a11: Pokestar = {
        kategorie: true,
        name: "Poké-Ball Schüssel",
        image: "poke/pokego.png",
        price: 15,
        description: "Spülmaschinengeeignet"
    };
    let a12: Pokestar = {
        kategorie: true,
        name: "Poster",
        image: "poke/poster.jpg",
        price: 15,
        description: "Gen 1 Poster"
    };
    let sw1: Pokestar = {
        kategorie: false,
        name: "Yoda Rucksack",
        image: "sw/babybag.jpg",
        price: 30,
        description: "Kinderrucksack"
    };
    let sw2: Pokestar = {
        kategorie: false,
        name: "Baby Yoda",
        image: "sw/babyyoda.jpg",
        price: 40,
        description: "Perfekte Einrichtung"
    };
    let sw3: Pokestar = {
        kategorie: false,
        name: "BB8 Brotdose",
        image: "sw/brotdose-bb-8.jpg",
        price: 15,
        description: "Luftdicht"
    };
    let sw4: Pokestar = {
        kategorie: false,
        name: "Ewok Rucksack",
        image: "sw/ewokbag.jpg",
        price: 30,
        description: "Sehr flauschig"
    };
    let sw5: Pokestar = {
        kategorie: false,
        name: "Lichtschwert",
        image: "sw/lightsaber.jpg",
        price: 150,
        description: "RGB!"
    };

    let sw6: Pokestar = {
        kategorie: false,
        name: "Tasse D-O",
        image: "sw/mug.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw7: Pokestar = {
        kategorie: false,
        name: "Tasse BB8",
        image: "sw/mug2.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw8: Pokestar = {
        kategorie: false,
        name: "Tasse Porg",
        image: "sw/porg.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw9: Pokestar = {
        kategorie: false,
        name: "R2D2 Kaffekanne",
        image: "sw/coffee.jpg",
        price: 30,
        description: "Spülmaschinengeeignet"
    };
    let sw10: Pokestar = {
        kategorie: false,
        name: "R2D2 Reiskocher",
        image: "sw/Pot.jpg",
        price: 90,
        description: "Ant-Haft-Beschichtet"
    };
    let sw11: Pokestar = {
        kategorie: false,
        name: "Darth Vader Toaster",
        image: "sw/toaster.jpg",
        price: 30,
        description: "Perfekt für jedes Frühstück"
    };
    let sw12: Pokestar = {
        kategorie: false,
        name: "Star Wars Waffeleisen",
        image: "sw/waffels.jpg",
        price: 30,
        description: "Todesstern Waffeln!"
    };
    //#enderegion
    const pokemonartikel: Pokestar[] = [eevee, relaxo, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12];
    const poke: HTMLElement = document.getElementById("shop1") as HTMLDivElement;
    const swtag: HTMLElement = document.getElementById("shop2") as HTMLDivElement;
    const cart1: HTMLElement = document.getElementById("count") as HTMLImageElement;
    const pokemon: HTMLElement = document.getElementById("pokelogo") as HTMLDivElement;
    const sw: HTMLElement = document.getElementById("swlogo") as HTMLDivElement;
    const pokep: HTMLElement = document.getElementById("poke") as HTMLElement;
    const swp: HTMLElement = document.getElementById("sw") as HTMLElement;

    //#region for schleife Atikel generieren
    
    let c: HTMLParagraphElement = document.createElement("p");
    let z = 0;
    let kostet = 0;
    
    for (let i: number = 0; i <= pokemonartikel.length - 1; i++) {

        let div: HTMLDivElement = document.createElement("div"); //new div an #shop1
        div.setAttribute("class", "artikel");
        if (pokemonartikel[i].kategorie)
            poke.appendChild(div);
        else
            swtag.appendChild(div);

        let img: HTMLImageElement = document.createElement("img"); //bild 
        img.setAttribute("src", pokemonartikel[i].image);
        img.setAttribute("alt", pokemonartikel[i].name);
        div.appendChild(img);

        let name: HTMLParagraphElement = document.createElement("p"); //Artikelname
        name.setAttribute("class", "atikelname");
        div.appendChild(name).innerHTML = pokemonartikel[i].name;

        let description: HTMLParagraphElement = document.createElement("p");
        description.setAttribute("class", "beschreibung");
        div.appendChild(description).innerHTML = pokemonartikel[i].description;

        let price: HTMLParagraphElement = document.createElement("p");
        price.setAttribute("class", "price");
        div.appendChild(price).innerHTML = pokemonartikel[i].price + "€";

        let div2: HTMLDivElement = document.createElement("div"); //neue div die dropt
        div2.setAttribute("class", "drop");
        div.appendChild(div2);

        let img2: HTMLImageElement = document.createElement("img");
        img2.setAttribute("src", "cart.png");
        img2.setAttribute("alt", "cart");
        div2.appendChild(img2);
        img2.addEventListener("click", cart);
        
        let img3: HTMLImageElement = document.createElement("img");
        img3.setAttribute("src", "heart.png");
        img3.setAttribute("alt", "heart");
        div2.appendChild(img3);
        
        pokemon.addEventListener("click", pokclick);
        sw.addEventListener("click", swclick);
        
        function pokclick(): void {
            if (pokemonartikel[i].kategorie == false){
                swtag.style.display = "none";
                swp.style.display = "none";
                poke.style.display = "flex";
                pokep.style.display = "block";
            }
        }
        function swclick(): void {
            if (pokemonartikel[i].kategorie == true){
                poke.style.display = "none";
                pokep.style.display = "none";
                swtag.style.display = "flex";
                swp.style.display = "block";
            }      
        }
        function cart(): void {
            z++;
            if (z > 0) {
                cart1.style.display = "block";
            }
            let a: string = "" + z;
            cart1.appendChild(c).innerHTML = a;
            kostet = kostet + pokemonartikel[i].price;
            console.log(kostet);
        }
    }
    //#endregion
}       