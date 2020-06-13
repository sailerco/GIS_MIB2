namespace Aufgabe_7 {
   /*  const ware: HTMLElement = document.getElementById("ware") as HTMLElement; */
    const poke: HTMLElement = document.getElementById("shop1") as HTMLDivElement;
    const swtag: HTMLElement = document.getElementById("shop2") as HTMLDivElement;
    const cart1: HTMLElement = document.getElementById("count") as HTMLImageElement;
    const pokemon: HTMLElement = document.getElementById("pokelogo") as HTMLDivElement;
    const sw: HTMLElement = document.getElementById("swlogo") as HTMLDivElement;
    const pokep: HTMLElement = document.getElementById("poke") as HTMLElement;
    const swp: HTMLElement = document.getElementById("sw") as HTMLElement;
    const home: HTMLElement = document.getElementById("home") as HTMLElement;
    //#region for schleife Atikel generieren
    
    let c: HTMLParagraphElement = document.createElement("p");
    let z: number = 0;
    let kostet: number = 0;
    let product: Array <Pokestar>;
    
    export function artikel(): void {
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
            
            function cart(): void {
                z++;
                if (z > 0) {
                    cart1.style.display = "block";
                }
                let a: string = "" + z;
                cart1.appendChild(c).innerHTML = a;
                kostet = kostet + pokemonartikel[i].price;
                console.log("Preis: " + kostet + "€");
                localStorage.setItem("kostet", kostet.toString());

                
                if (!product) {
                    product = [pokemonartikel[i]];
                } else {
                    product.push(pokemonartikel[i]);
                }
                localStorage.setItem("zahl", a);
                localStorage.setItem("artikel", JSON.stringify(product));
            }
        }

        //#endregion
        pokemon.addEventListener("click", pokclick);
        sw.addEventListener("click", swclick);
        home.addEventListener("click", homeclick);
        function homeclick(): void {
            swtag.style.display = "flex";
            swp.style.display = "block";
            poke.style.display = "flex";
            pokep.style.display = "block";
        }
        function pokclick(): void {
            swtag.style.display = "none";
            swp.style.display = "none";
            poke.style.display = "flex";
            pokep.style.display = "block";
        }
        function swclick(): void {
            poke.style.display = "none";
            pokep.style.display = "none";
            swtag.style.display = "flex";
            swp.style.display = "block";  
        }
        
    }
}       