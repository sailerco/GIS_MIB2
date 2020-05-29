namespace Aufgabe_5 {

    interface Pokestar {
        name: string;
        image: string;
        description: string;
        price: number;
    }
    // sw artikel
    let sw1: Pokestar = {
        name: "Yoda Rucksack",
        image: "sw/babybag.jpg",
        price: 30,
        description: "Kinderrucksack"
    };
    let sw2: Pokestar = {
        name: "Baby Yoda",
        image: "sw/babyyoda.jpg",
        price: 40,
        description: "Perfekte Einrichtung"
    };
    let sw3: Pokestar = {
        name: "BB8 Brotdose",
        image: "sw/brotdose-bb-8.jpg",
        price: 15,
        description: "Luftdicht"
    };
    let sw4: Pokestar = {
        name: "Ewok Rucksack",
        image: "sw/ewokbag.jpg",
        price: 30,
        description: "Sehr flauschig"
    };
    let sw5: Pokestar = {
        name: "Lichtschwert",
        image: "sw/lightsaber.jpg",
        price: 150,
        description: "RGB!"
    };

    let sw6: Pokestar = {
        name: "Tasse D-O",
        image: "sw/mug.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw7: Pokestar = {
        name: "Tasse BB8",
        image: "sw/mug2.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw8: Pokestar = {
        name: "Tasse Porg",
        image: "sw/porg.jpg",
        price: 7,
        description: "Spülmaschinengeeignet"
    };
    let sw9: Pokestar = {
        name: "R2D2 Kaffekanne",
        image: "sw/coffee.jpg",
        price: 30,
        description: "Spülmaschinengeeignet"
    };
    let sw10: Pokestar = {
        name: "R2D2 Reiskocher",
        image: "sw/Pot.jpg",
        price: 90,
        description: "Ant-Haft-Beschichtet"
    };
    let sw11: Pokestar = {
        name: "Darth Vader Toaster",
        image: "sw/toaster.jpg",
        price: 30,
        description: "Perfekt für jedes Frühstück"
    };
    let sw12: Pokestar = {
        name: "Star Wars Waffeleisen",
        image: "sw/waffels.jpg",
        price: 30,
        description: "Todesstern Waffeln!"
    };

    const swAtikel: Pokestar[] = [sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12];
    const swtag: HTMLElement = document.getElementById("shop2") as HTMLDivElement;

    starwars();
    function starwars(): void {

        for (let i: number = 0; i <= swAtikel.length - 1; i++) {

            let div: HTMLDivElement = document.createElement("div"); //new div an #shop2
            div.setAttribute("class", "artikel");
            swtag.appendChild(div);

            let img: HTMLImageElement = document.createElement("img"); //bild 
            img.setAttribute("src", swAtikel[i].image);
            img.setAttribute("alt", swAtikel[i].name);
            div.appendChild(img);

            let name: HTMLParagraphElement = document.createElement("p"); //Artikelname
            name.setAttribute("class", "atikelname");
            div.appendChild(name).innerHTML = swAtikel[i].name;

            let description: HTMLParagraphElement = document.createElement("p");
            description.setAttribute("class", "beschreibung");
            div.appendChild(description).innerHTML = swAtikel[i].description;

            let price: HTMLParagraphElement = document.createElement("p");
            price.setAttribute("class", "price");
            div.appendChild(price).innerHTML = swAtikel[i].price + "€";

            let div2: HTMLDivElement = document.createElement("div"); //neue div die dropt
            div2.setAttribute("class", "drop");
            div.appendChild(div2);

            let img2: HTMLImageElement = document.createElement("img");
            img2.setAttribute("src", "cart.png");
            img.setAttribute("alt", "cart");
            div2.appendChild(img2);

            let img3: HTMLImageElement = document.createElement("img");
            img3.setAttribute("src", "heart.png");
            img.setAttribute("alt", "heart");
            div2.appendChild(img3);
        }
    }
}        