namespace Aufgabe_5 {
    //#region Produkte 
    interface Pokestar { 
        name: string;
        image: string;
        description: string;
        price: number;
    }
    let eevee: Pokestar = {   
        name: "Evoli Rucksack",
        image: "poke/bag.jpg",
        description: "Rucksack - Evoli Design",
        price: 20
    };
    let relaxo: Pokestar = {
        name: "Relaxo Sitzsack",
        image: "poke/beanbag.jpg",
        description: "1,20m, weich, Relaxo",
        price: 100
    };
    let a3: Pokestar = {
        name: "Detektiv Pikachu",
        image: "poke/cap.jpg",
        description: "Mütze mit Pikachu Ohren",
        price: 15
    };
    let a4: Pokestar = {
        name: "Zurrokex Mütze",
        image: "poke/cap2.jpg",
        description: "Mütze im Zurrokex Design",
        price: 15
    };
    let a5: Pokestar = {
        name: "Evoli Figuren",
        image: "poke/eevee.jpg",
        description: "Evolis sind abnehmbar",
        price: 20
    };
    let a6: Pokestar = {
        name: "Gengar Tasse",
        image: "poke/mug.jpg",
        description: "Lila Tasse mit Gengars Gesicht",
        price: 7
    };
    let a7: Pokestar = {
        name: "Relaxo Plüschtier",
        image: "poke/plush1.jpg",
        description: "Sehr weiches Relaxo",
        price: 15
    };
    let a8: Pokestar = {   
        name: "Wolly Plüschtier",
        image: "poke/plush2.jpg",
        price: 15,
        description: "Sehr weiches Wolly"
    };
    let a9: Pokestar = {
        
        name: "Pikachu Plüschtier",
        image: "poke/plush3.jpg",
        price: 20,
        description: "Pikachu macht sein Abschluss"
    };
    let a10: Pokestar = {  
        name: "Ditto Plüschtier",
        image: "poke/plush4.jpg",
        price: 15,
        description: "Passt zu jeder Einrichtung"
    };
    let a11: Pokestar = {
        name: "Poké-Ball Schüssel",
        image: "poke/pokego.png",
        price: 15,
        description: "Spülmaschinengeeignet"
    };
    let a12: Pokestar = {
        name: "Poster",
        image: "poke/poster.jpg",
        price: 15,
        description: "Gen 1 Poster"
    };
    //#enderegion
    const pokemonartikel: Pokestar[] = [eevee, relaxo, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12];
    const poke: HTMLElement = document.getElementById("shop1") as HTMLDivElement; 
    
    for (let i: number = 0; i <= pokemonartikel.length - 1; i++) {

        let div: HTMLDivElement = document.createElement("div"); //new div an #shop1
        div.setAttribute("class", "artikel");
        poke.appendChild(div);                                  

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
        img.setAttribute("alt", "cart");
        div2.appendChild(img2);

        let img3: HTMLImageElement = document.createElement("img");
        img3.setAttribute("src", "heart.png");
        img.setAttribute("alt", "heart");
        div2.appendChild(img3); 
      
    }
}       