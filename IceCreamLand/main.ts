namespace IceCreamLand {
    interface Eis {
        Kugeln: number;
        Preis: number;
    }
    let eineKugel: Eis = {
        Kugeln: 1,
        Preis: 1.10
    };
    let zweiKugel: Eis = {
        Kugeln: 2,
        Preis: 2.20
    };
    let dreiKugel: Eis = {
        Kugeln: 3,
        Preis: 3.30
    };
    let vierKugel: Eis = {
        Kugeln: 4,
        Preis: 4.40
    };
    const eispreis: Eis[] = [eineKugel, zweiKugel, dreiKugel, vierKugel];
    let sauce: string[] = ["Erdbeere", "Karamell", "Vanille", "Schoko", "trash"];
    let toppings: string[] = ["Erdbeeren", "Kekse", "Streusel", "Regenbogen", "trash"];
    let flavour: string[] = ["brownie", "schoko", "oreo", "vanille", "erdbeere", "cookie", "mango", "mint"];
    let flavourklein: string[] = ["brownie", "schoko", "oreo", "vanille", "erdbeere", "cookie", "mango", "mint"];
    
    let start: HTMLElement = document.getElementById("start") as HTMLElement;
    let becher: HTMLElement = document.getElementById("becher") as HTMLElement;
    let kugel: HTMLElement = document.getElementById("kugel") as HTMLElement;
    let eis: HTMLElement = document.getElementById("eis") as HTMLElement;
    let saucetop: HTMLElement = document.getElementById("saucetopping") as HTMLElement;
    let toppingtest: HTMLElement = document.getElementById("realtoppings") as HTMLElement;
    let order: HTMLElement = document.getElementById("order") as HTMLElement;

    let kugelanzahl: HTMLElement = document.getElementById("zahl") as HTMLElement;
    let sorten: HTMLElement = document.getElementById("sorten") as HTMLElement;
    let auswahl: HTMLElement = document.getElementById("auswahl") as HTMLElement;
    let top: HTMLElement = document.getElementById("top") as HTMLElement;
    let topsauce: HTMLElement = document.getElementById("sauce") as HTMLElement;

    let howmany: number;
    let coneorcup: boolean;
    
    let side: HTMLElement = document.createElement("div");
    side.setAttribute("id", "side");
    kugel.insertBefore(side, kugelanzahl);

    let eisside: HTMLElement = document.createElement("div");
    eisside.setAttribute("id", "eisside");
    eis.insertBefore(eisside, sorten);

    let sauceside: HTMLElement = document.createElement("div");
    sauceside.setAttribute("id", "sauceside");
    saucetop.insertBefore(sauceside, topsauce);

    let topside: HTMLElement = document.createElement("div");
    topside.setAttribute("id", "topside");
    toppingtest.insertBefore(topside, top);

    let orderside: HTMLElement = document.createElement("div");
    orderside.setAttribute("id", "orderside");
    order.insertBefore(orderside, document.getElementById("form")!);

    document.getElementById("button1")!.style.display = "none";
    document.getElementById("button11")!.style.display = "none";
    document.getElementById("button2")!.style.display = "none";
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", buttonclick); 
    function buttonclick(): void {
        document.location.href = "#becher";
        becher.style.display = "block";
        becher.style.maxWidth = becher.style.maxHeight = "100%";
        start.style.display = "none";
    }
    //region choose one
    addcup();
    function addcup(): void {
        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("class", "home");
        img.setAttribute("alt", "home");
        img.setAttribute("src", "home.png");
        img.addEventListener("click", exit);
        document.getElementById("becher")!.appendChild(img);
        
        let div: HTMLDivElement = document.createElement("div"); //new div an #shop1
        div.setAttribute("class", "cone");
        auswahl.appendChild(div);

        let becher: HTMLDivElement = document.createElement("div"); //new div an #shop1
        becher.setAttribute("class", "cup");
        auswahl.appendChild(becher);

        let cone: HTMLImageElement = document.createElement("img");
        cone.setAttribute("src", "img/cone.png");
        cone.setAttribute("alt", "cone");
        div.appendChild(cone);

        let cup: HTMLImageElement = document.createElement("img");
        cup.setAttribute("src", "img/cup1.png");
        cup.setAttribute("alt", "cup");
        becher.appendChild(cup);

        cup.addEventListener("click", cupAdd);
        cone.addEventListener("click", coneAdd);

        function coneAdd(): void {
            coneorcup = true;
            cone.style.filter = "grayscale(100%)";
            cup.style.filter = "grayscale(0%)";
            localStorage.setItem("Behälter", "Cone");
            document.getElementById("button1")!.style.display = "block";
        }

        function cupAdd(): void {
            document.getElementById("button1")!.style.display = "block";
            localStorage.setItem("Behälter", "Cup");
            coneorcup = false;
            cup.style.filter = "grayscale(100%)";
            cone.style.filter = "grayscale(0%)";
        }
    }
    //#endregion
    //#region Eventlistener
    let y: number = 0;
    /* let side: HTMLElement = document.getElementById("side") as HTMLElement;  */
    document.getElementById("button1")!.addEventListener("click", buttonclick1);
    function buttonclick1(): void {
        document.location.href = "#kugel";
        if (y > 0) {
            /* eisside.removeChild(eisside.lastChild!); */
            side.removeChild(side.lastChild!);
            y = 0;
        }
        let div: HTMLElement = document.createElement("div");
        div.setAttribute("id", "lineart_container");
        let behaelter: HTMLImageElement = document.createElement("img");
        /* side.removeChild(side.lastChild!); */
        if (coneorcup) {
            behaelter.setAttribute("src", "img/cone_img.png");
            behaelter.setAttribute("alt", "cup");
            behaelter.setAttribute("id", "lineart");
            y++;
        }
        else {
            behaelter.setAttribute("src", "img/cup_img.png");
            behaelter.setAttribute("alt", "cup");
            behaelter.setAttribute("id", "lineart");
            y++;
        }
        side.appendChild(div);
       /*  eisside.appendChild(div); */
        div.appendChild(behaelter);
        kugel.style.display = "block";
        kugel.style.width = "100vw";
        kugel.style.height = "100vh";
        becher.style.display = "none";
    }
    let counter: number = 0;

    //#region kugel
    addkugel();
    function addkugel(): void {
        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("class", "home");
        img.setAttribute("alt", "home");
        img.setAttribute("src", "home.png");
        img.addEventListener("click", exit);

        kugel.appendChild(img);
        for (let i: number = 1; i <= 4; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "k");
            kugelanzahl.appendChild(div);

            let zahl: HTMLParagraphElement = document.createElement("p"); //Artikelname
            zahl.setAttribute("class", i + "");
            div.appendChild(zahl).innerHTML = i + "";
            div.addEventListener("click", kugel);

            function kugel(): void {
                if (counter > 0) {
                    for (let y: number = 0; y <= 3; y++) {
                        let z: HTMLElement = document.getElementsByClassName("k")[y] as HTMLElement;
                        z.setAttribute("style", "color: rgb(190, 210, 255); background-color: white");
                        div.setAttribute("style", "color: white; background-color: rgb(190, 210, 255)");
                    }
                }
                document.getElementById("button11")!.style.display = "block";
                div.setAttribute("style", "color: white; background-color: rgb(190, 210, 255)");
                localStorage.setItem("kugel", i + "");
                localStorage.setItem("preis", eispreis[i - 1].Preis.toString());
                howmany = parseInt(localStorage.getItem("kugel")!);
                counter++;
                kugelnzeichnen(i);
            }
        }
    }
    let countkugel: number = 0;
    let lineart: HTMLElement = document.getElementById("lineart") as HTMLElement;
    function kugelnzeichnen(anzahl: number): void {
        if (countkugel > 0) {
            side.removeChild(side.lastChild!);
        }
        let kugelzeichnen: HTMLDivElement = document.createElement("div");
        kugelzeichnen.setAttribute("class", "kugeln");
        side.insertBefore(kugelzeichnen, lineart);
        for (let i: number = 1; i <= anzahl; i++) {
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("id", "kugel" + i + "");
            /*  div.style.width = div.style.height = "100px"; */
            if (anzahl == 1 && window.matchMedia("(min-width: 320px)").matches) {
                div.style.width = div.style.height = "77px";
                div.style.borderRadius = "40px";
                div.style.left = "9%";
                div.style.top = "6%";
            }
            if (anzahl == 1 && window.matchMedia("(min-width: 641px)").matches) {
                div.style.width = div.style.height = "145px";
                div.style.borderRadius = "100px";
                div.style.left = "7%";
                div.style.top = "0%";
            }
            if (anzahl == 1 && window.matchMedia("(min-width: 1025px)").matches) {
                div.style.width = div.style.height = "185px";
                div.style.borderRadius = "100px";
                div.style.left = "8%";
                div.style.top = "5%";
            }
            
            kugelzeichnen.appendChild(div);
        }
        countkugel++;
    }
    document.getElementById("button11")!.addEventListener("click", buttonclick2);
    function buttonclick2(): void {
        document.location.href = "#eis";
        if (window.matchMedia("(min-width: 320px)").matches) {
            side.style.position = "absolute";
            side.style.left = "0%";
            side.style.top = "70%";
            side.style.height = "250px";
            side.style.marginRight = "-50px";
            side.style.transform = "(-50%, -50%)";  
        } 
        if (window.matchMedia("(min-width: 641px)").matches) {
            side.style.height = "400px";
            side.style.top = "50%";
            side.style.left = "39%";
            side.style.marginRight = "-50px";
            side.style.transform = "(-50%, -50%)";  
        }
        if (window.matchMedia("(min-width: 1025px)").matches) {
            side.style.top = "33%";
            side.style.left = "-1%";
            side.style.marginRight = "0px";  
        }
        if (window.matchMedia("(min-width: 1370px)").matches) {
            side.style.top = "42%";
            side.style.left = "0%";
            side.style.marginRight = "0px";  
        }
        kugel.style.display = "none";
        eis.style.display = "block";
        eis.style.width = "100%vw";
        eis.style.height = "100%vh";
        eisside.appendChild(side);
        /* document.overflow = "scroll"; */
    }
    document.getElementById("button2")!.addEventListener("click", buttonclick3);
    function buttonclick3(): void {
        document.location.href = "#saucetopping";
        if (window.matchMedia("(min-width: 641px)").matches) {  
            side.style.left = "0%";
            side.style.top = "70%";
        }
        if (window.matchMedia("(min-width: 1025px)").matches) {  
            side.style.left = "0%";
            side.style.top = "40%";
        }
        sauceside.appendChild(side);
        eis.style.display = "none";
        saucetop.style.display = "block";
        saucetop.style.width = "100%vw";
        saucetop.style.height = "100%vh";
    }
    document.getElementById("button3")!.addEventListener("click", buttonclick4);
    function buttonclick4(): void {
        document.location.href = "#realtoppings";
        topside.appendChild(side);
        saucetop.style.display = "none";
        toppingtest.style.display = "block";
        toppingtest.style.width = "100%vw";
        toppingtest.style.height = "100%vh";
    }
    document.getElementById("button4")!.addEventListener("click", buttonclick5);
    function buttonclick5(): void {
        document.location.href = "#order";
        if (window.matchMedia("(min-width: 1025px)").matches) {  
            side.style.left = "60%";
            side.style.top = "20%";
            orderside.appendChild(side);
        }
        toppingtest.style.display = "none";
        order.style.display = "block";
        order.style.width = "100%vw";
        order.style.height = "100%vh";
    }
    //#endregion kugel

    //#region flavour
    
    let reminder: HTMLElement = document.createElement("p");
    reminder.setAttribute("id", "reminder");
    
    let z: number = 0;
    let insgesamt: number = 0;
    let sorte: String[] = [];
    let check: boolean = false;
    addflavour();
    function addflavour(): void {
        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("src", "home.png");
        img.setAttribute("class", "home");
        img.setAttribute("alt", "home");
        img.addEventListener("click", exit);
        eis.appendChild(img);
        
        console.log("kugel" + howmany);
        for (let i: number = 0; i < flavour.length; i++) {
            console.log("i arr");
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "flavour");
            sorten.appendChild(div);

            if ( window.matchMedia("(min-width: 1025px)").matches){
                let img: HTMLImageElement = document.createElement("img");
                img.setAttribute("src", "img/" + flavour[i] + ".png");
                img.setAttribute("alt", flavour[i]);
                div.appendChild(img);
            } else {
                let text: HTMLElement = document.createElement("h2");
                text.setAttribute("class", "sortentext");
                div.appendChild(text).innerHTML = flavour[i];
            }
            let buttondiv: HTMLDivElement = document.createElement("div");
            buttondiv.setAttribute("class", "buttons");
            div.appendChild(buttondiv);

            let minus: HTMLElement = document.createElement("button");
            minus.innerHTML = "—";
            minus.setAttribute("class", "minus");
            minus.addEventListener("click", loeschenArtikel);
            buttondiv.appendChild(minus);

            let anzahl: HTMLParagraphElement = document.createElement("p");
            buttondiv.appendChild(anzahl).innerHTML = "0";

            let plus: HTMLElement = document.createElement("button");
            plus.innerHTML = "+";
            plus.setAttribute("class", "plus");
            plus.addEventListener("click", addArtikel);
            buttondiv.appendChild(plus);

            function loeschenArtikel(): void {
                if (parseInt(anzahl.innerHTML) != 0) {
                    z = parseInt(anzahl.innerHTML) - 1;
                    anzahl.innerHTML = z + "";

                    if (sorte[insgesamt - 1] == flavour[i])
                        sorte.pop();
                    else {
                        for (let y: number = sorte.length - 2; sorte[y] == flavour[i] || y == 0; y--) {
                            if (sorte[y] == flavour[i]) {
                                check = true;
                                sorte.splice(y, 1);
                                break;
                            }
                        }
                        if (!check && howmany == 3) {
                            if (sorte[0] == flavour[i])
                                sorte.shift();
                        }
                        if (!check && howmany == 4) {
                            if (sorte[0] == flavour[i])
                                sorte.shift();
                            if (sorte[1] == flavour[i])
                                sorte.splice(1, 1);
                        }
                    }
                    localStorage.setItem("sorten", JSON.stringify(sorte));
                    flavourentfernen(flavour[i], insgesamt, sorte);
                    insgesamt--;
                    if (window.matchMedia("(min-width: 1025px)").matches)
                        reminder.innerHTML = "";
                }
                if(insgesamt != howmany){
                    document.getElementById("button2")!.style.display = "none";
                }
            }
            function addArtikel(): void {
                if (insgesamt < howmany) {
                    z = parseInt(anzahl.innerHTML) + 1;
                    anzahl.innerHTML = z + "";
                    insgesamt++;
                    flavourzeichnen(flavourklein[i], insgesamt);
                    if (sorte) {
                        sorte.push(flavour[i]);
                    } else {
                        sorte = [flavour[i]];
                    }
                    localStorage.setItem("sorten", JSON.stringify(sorte));
                    console.log(howmany);
                }
                if (insgesamt == howmany) {
                    document.getElementById("button2")!.style.display = "block";
                    eis.appendChild(reminder);
                    if (window.matchMedia("(min-width: 1025px)").matches)
                        reminder.innerHTML = "Du hast schon " + localStorage.getItem("kugel") + " ausgewählt";
                }
            }
        }
    }

    function flavourzeichnen(flavour: string, _zahl: number): void {
        document.getElementById("kugel" + _zahl)!.style.backgroundImage = "url(flavourimg/" + flavour + ".png)";
    }
    function flavourentfernen(flavour: string, _zahl: number, _flav: String[]): void {
        let sortenstring: String[] = JSON.parse(localStorage.getItem("sorten")!);
        console.log(sortenstring);
        document.getElementById("kugel" + _zahl)!.style.backgroundImage = "none";
        for (let i: number = 1; i <= howmany; i++) {
            document.getElementById("kugel" + i)!.style.backgroundImage = "url(flavourimg/" + sortenstring[i - 1] + ".png)";
        }
    }
    let wahl: boolean = false;
    let trash: number = 0;
    //#region top
    let countsauce: number = 0;
    addtop();
    function addtop(): void {
        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("src", "home.png");
        img.setAttribute("class", "home");
        img.setAttribute("alt", "home");
        img.addEventListener("click", exit);
        saucetop.appendChild(img);
        
        for (let i: number = 0; i < sauce.length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "sauce");
            topsauce.appendChild(div);

            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", "sauceimg/" + sauce[i] + ".png");
            img.setAttribute("alt", sauce[i]);
            div.appendChild(img);
            if (sauce[i] != "trash") {
                let saucename: HTMLElement = document.createElement("h1");
                saucename.setAttribute("class", "sauce");
                saucename.innerHTML = sauce[i];
                div.appendChild(saucename); 
            }
            div.addEventListener("click", sauceontop);
            function sauceontop(): void {
                zeichnesauce(sauce[i]);
                countsauce++;   
                if (wahl == false) {
                    let preis: number = parseFloat(localStorage.getItem("preis")!);
                    preis = preis + 1.0;
                    localStorage.setItem("preis", preis.toString());
                    wahl = true;
                }
                if (sauce[i] == "trash" && wahl == true) {
                    let preis: number = parseFloat(localStorage.getItem("preis")!);
                    preis = preis - 1.0;
                    localStorage.setItem("preis", preis.toString());
                    localStorage.removeItem("Sauce");
                    wahl = false;
                }
            }
        }
    }
    function zeichnesauce(_sauce: string): void {
        localStorage.setItem("Sauce", _sauce);
        if (countsauce > 0 && trash == 0) {
            side.removeChild(side.lastChild!);
            countsauce = 0;
            trash++;
        }
        if (_sauce == "Erdbeere") {
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", "sauceimg/" + "erdbeere" + howmany + ".png");
            img.setAttribute("id", "sauceimg");
            img.setAttribute("alt", _sauce);
            if (!window.matchMedia("(min-width: 320px)").matches) {
                if (howmany == 3) {
                    img.style.top = "-6%";
                    img.style.left = "33%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "42%";
                }
            }
            if (window.matchMedia("(min-width: 1025px)").matches) {
                if (howmany == 3) {
                    img.style.top = "0%";
                    img.style.left = "20%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "24%";
                }
            }
            side.appendChild(img);
            trash = 0;
        }
        if (_sauce == "Karamell") {
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", "sauceimg/" + "karamell" + howmany + ".png");
            img.setAttribute("id", "sauceimg");
            img.setAttribute("alt", _sauce);
            if (!window.matchMedia("(min-width: 320px)").matches) {
                if (howmany == 3) {
                    img.style.top = "0%";
                    img.style.left = "33%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "42%";
                }
            }
            if (window.matchMedia("(min-width: 1025px)").matches) {
                if (howmany == 3) {
                    img.style.top = "0%";
                    img.style.left = "20%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "24%";
                }
            }
            trash = 0;
            side.appendChild(img);
        }
        if (_sauce == "Schoko") {
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", "sauceimg/" + "schoko" + howmany + ".png");
            img.setAttribute("id", "sauceimg");
            img.setAttribute("alt", _sauce);
            if (!window.matchMedia("(min-width: 320px)").matches) {
                if (howmany == 3) {
                    img.style.top = "0%";
                    img.style.left = "33%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "42%";
                }
            }
            if (window.matchMedia("(min-width: 1025px)").matches) {
                if (howmany == 3) {
                    img.style.top = "0%";
                    img.style.left = "20%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "24%";
                }
            }
            side.appendChild(img);
            trash = 0;
        }
        if (_sauce == "Vanille") {
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", "sauceimg/" + "vanille" + howmany + ".png");
            img.setAttribute("id", "sauceimg");
            img.setAttribute("alt", _sauce);
            if (!window.matchMedia("(min-width: 320px)").matches) {
                if (howmany == 3) {
                    img.style.top = "0%";
                    img.style.left = "33%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "42%";
                }
            }
            if (window.matchMedia("(min-width: 1025px)").matches) {
                if (howmany == 3) {
                    img.style.top = "0%";
                    img.style.left = "20%";
                }
                if (howmany == 4) {
                    img.style.top = "-2%";
                    img.style.left = "24%";
                }
            }
            trash = 0;
            side.appendChild(img);
        }

    }
    let savetopping: String[] = [];
    let counttopping: number = 0;
    buildtopping();
    let toppingcount: number = 0;
    function buildtopping(): void {
        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("src", "home.png");
        img.setAttribute("class", "home");
        img.setAttribute("alt", "home");
        img.addEventListener("click", exit);
        toppingtest.appendChild(img); 
        for (let i: number = 0; i < toppings.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "topper");
            top.appendChild(div);

            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", "img/" + toppings[i] + ".png");
            img.setAttribute("alt", toppings[i]);
            div.appendChild(img);
            if (toppings[i] != "trash") {
                let topname: HTMLElement = document.createElement("h1");
                topname.setAttribute("class", "topp");
                topname.innerHTML = toppings[i];
                div.appendChild(topname);  
            }
            

            div.addEventListener("click", toptop);
            function toptop (): void {
                let string: string = toppings[i]; 
                if (toppings[i] != "trash" && savetopping.indexOf(string) == -1) {
                    console.log("im here");
                    drawtop(toppings[i]);
                    if (savetopping) {
                        savetopping.push(toppings[i]);
                    } else {
                        savetopping = [toppings[i]];
                    }
                    localStorage.setItem("Topping", JSON.stringify(savetopping));  
                    toppingcount++;
                } else if (toppings[i] == "trash") {
                    while (toppingcount > 0) {
                        side.removeChild(side.lastChild!);
                        toppingcount--;
                    }
                    localStorage.removeItem("Topping");
                    savetopping = [];
                }
                
            }
                
        }
    }
    function drawtop(_topping: string): void {
        let img: HTMLElement = document.createElement("img");
        img.setAttribute("src", "toppingimg/" + _topping + ".png");
        img.setAttribute("class", "toppingonice");
        if (window.matchMedia("(min-width: 320px)").matches) {
            if (_topping == "Streusel" || _topping == "Regenbogen")
            img.style.width = "70px";
            if (_topping == "Erdbeeren")
            img.style.left = "50%";
        }
        if (window.matchMedia("(min-width: 641px)").matches) {
            if (_topping == "Streusel" || _topping == "Regenbogen")
            img.style.width = "120px";
            if (_topping == "Erdbeeren")
            img.style.left = "50%";
        }
        if (window.matchMedia("(min-width: 1025px)").matches) {
            if (_topping == "Streusel" || _topping == "Regenbogen")
            img.style.width = "150px";
            if (_topping == "Erdbeeren")
            img.style.left = "60%";
        }
        side.appendChild(img);
    }
    document.getElementById("surprise")?.addEventListener("click", surpriseclick);
    function surpriseclick(): void {
        let div: HTMLElement = document.createElement("div");
        div.setAttribute("id", "surprisememe");
        let img: HTMLElement = document.createElement("img");
        img.setAttribute("src", "GIS_Meme.png");
        img.setAttribute("alt", "meme");
        div.appendChild(img);
        let a: HTMLElement = document.createElement("a");
        a.setAttribute("href", "https://en.wikipedia.org/wiki/Distracted_boyfriend_meme#/media/File:Disloyal_man_with_his_girlfriend_looking_at_another_girl.jpg");
        a.setAttribute("target", "_blank");
        a.innerHTML = "Inspiration";
        div.append(a);
        order.appendChild(div);
    }
    document.getElementById("exit")?.addEventListener("click", exit);
    
    function exit(): void {
        document.location.href = "#start";
        order.style.display = "none";
        start.style.display = "block";
        start.style.width = "100%vw";
        start.style.height = "100%vh";
        localStorage.clear();
        window.location.reload();
    }
}
