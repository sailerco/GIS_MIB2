"use strict";
var IceCreamLand;
(function (IceCreamLand) {
    let eineKugel = {
        Kugeln: 1,
        Preis: 1.10
    };
    let zweiKugel = {
        Kugeln: 2,
        Preis: 2.20
    };
    let dreiKugel = {
        Kugeln: 3,
        Preis: 3.30
    };
    let vierKugel = {
        Kugeln: 4,
        Preis: 4.40
    };
    let eispreis = [eineKugel, zweiKugel, dreiKugel, vierKugel];
    let sauce = ["Erdbeere", "Karamell", "Vanille", "Schoko", "trash"];
    let toppings = ["Erdbeeren", "Kekse", "Streusel", "Regenbogen", "trash"];
    let flavour = ["brownie", "schoko", "oreo", "vanille", "erdbeere", "cookie", "mango", "mint"];
    let flavourklein = ["brownie", "schoko", "oreo", "vanille", "erdbeere", "cookie", "mango", "mint"];
    let start = document.getElementById("start");
    let becher = document.getElementById("becher");
    let kugel = document.getElementById("kugel");
    let eis = document.getElementById("eis");
    let saucetop = document.getElementById("saucetopping");
    let toppingtest = document.getElementById("realtoppings");
    let order = document.getElementById("order");
    let kugelanzahl = document.getElementById("zahl");
    let sorten = document.getElementById("sorten");
    let auswahl = document.getElementById("auswahl");
    let top = document.getElementById("top");
    let topsauce = document.getElementById("sauce");
    let howmany;
    let coneorcup;
    //#region vortlaufende darstellung platzieren 
    let side = document.createElement("div");
    side.setAttribute("id", "side");
    kugel.insertBefore(side, kugelanzahl);
    let sauceside = document.createElement("div");
    sauceside.setAttribute("id", "sauceside");
    saucetop.insertBefore(sauceside, topsauce);
    let topside = document.createElement("div");
    topside.setAttribute("id", "topside");
    toppingtest.insertBefore(topside, top);
    let orderside = document.createElement("div");
    orderside.setAttribute("id", "orderside");
    order.insertBefore(orderside, document.getElementById("form"));
    document.getElementById("button1").style.display = "none";
    document.getElementById("button11").style.display = "none";
    document.getElementById("button2").style.display = "none";
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    function buttonclick() {
        document.location.href = "#becher";
        becher.style.display = "block";
        becher.style.maxWidth = becher.style.maxHeight = "100%";
        start.style.display = "none";
    }
    function setAttributes(_element, _number, _classOrId, _alt, _src) {
        if (_number == 1)
            _element.setAttribute("class", _classOrId);
        if (_number == 2)
            _element.setAttribute("id", _classOrId);
        _element.setAttribute("alt", _alt);
        _element.setAttribute("src", _src);
    }
    //#endregion
    //#region choose one
    addcup();
    function addcup() {
        let img = document.createElement("img");
        setAttributes(img, 1, "home", "home", "home.png");
        img.addEventListener("click", exit);
        document.getElementById("becher").appendChild(img);
        let div = document.createElement("div"); //new div an #shop1
        div.setAttribute("class", "cone");
        auswahl.appendChild(div);
        let becher = document.createElement("div"); //new div an #shop1
        becher.setAttribute("class", "cup");
        auswahl.appendChild(becher);
        let cone = document.createElement("img");
        cone.setAttribute("src", "img/cone.png");
        cone.setAttribute("alt", "cone");
        div.appendChild(cone);
        let cup = document.createElement("img");
        cup.setAttribute("src", "img/cup1.png");
        cup.setAttribute("alt", "cup");
        becher.appendChild(cup);
        cup.addEventListener("click", cupAdd);
        cone.addEventListener("click", coneAdd);
        function coneAdd() {
            coneorcup = true;
            cone.style.filter = "grayscale(100%)";
            cup.style.filter = "grayscale(0%)";
            localStorage.setItem("Behälter", "Cone");
            document.getElementById("button1").style.display = "block";
        }
        function cupAdd() {
            coneorcup = false;
            document.getElementById("button1").style.display = "block";
            localStorage.setItem("Behälter", "Cup");
            cup.style.filter = "grayscale(100%)";
            cone.style.filter = "grayscale(0%)";
        }
    }
    //#endregion
    //#region Eventlistener
    let y = 0;
    document.getElementById("button1").addEventListener("click", buttonclick1);
    function buttonclick1() {
        document.location.href = "#kugel";
        if (y > 0) {
            side.removeChild(side.lastChild);
            y = 0;
        }
        let div = document.createElement("div");
        div.setAttribute("id", "lineart_container");
        let behaelter = document.createElement("img");
        if (coneorcup) {
            setAttributes(behaelter, 2, "lineart", "cone", "img/cone_img.png");
            y++;
        }
        else {
            setAttributes(behaelter, 2, "lineart", "cup", "img/cup_img.png");
            y++;
        }
        side.appendChild(div);
        div.appendChild(behaelter);
        kugel.style.display = "block";
        becher.style.display = "none";
    }
    let counter = 0;
    //#region kugel
    addkugel();
    function addkugel() {
        let img = document.createElement("img");
        setAttributes(img, 1, "home", "home", "home.png");
        img.addEventListener("click", exit);
        kugel.appendChild(img);
        for (let i = 1; i <= 4; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "k");
            kugelanzahl.appendChild(div);
            let zahl = document.createElement("p"); //Artikelname
            zahl.setAttribute("class", i + "");
            div.appendChild(zahl).innerHTML = i + "";
            div.addEventListener("click", kugel);
            function kugel() {
                if (counter > 0) {
                    for (let y = 0; y <= 3; y++) {
                        let z = document.getElementsByClassName("k")[y];
                        z.setAttribute("style", "color: rgb(190, 210, 255); background-color: white");
                        div.setAttribute("style", "color: white; background-color: rgb(190, 210, 255)");
                    }
                }
                document.getElementById("button11").style.display = "block";
                div.setAttribute("style", "color: white; background-color: rgb(190, 210, 255)");
                localStorage.setItem("kugel", i + "");
                localStorage.setItem("preis", eispreis[i - 1].Preis.toString());
                howmany = parseInt(localStorage.getItem("kugel"));
                counter++;
                kugelnzeichnen(i);
            }
        }
    }
    let countkugel = 0;
    let lineart = document.getElementById("lineart");
    function kugelnzeichnen(anzahl) {
        if (countkugel > 0) {
            side.removeChild(side.lastChild);
        }
        let kugelzeichnen = document.createElement("div");
        kugelzeichnen.setAttribute("class", "kugeln");
        side.insertBefore(kugelzeichnen, lineart);
        for (let i = 1; i <= anzahl; i++) {
            let div = document.createElement("div");
            div.setAttribute("id", "kugel" + i + "");
            if (anzahl == 1) {
                div.setAttribute("class", "singleOne");
            }
            kugelzeichnen.appendChild(div);
        }
        countkugel++;
    }
    document.getElementById("button11").addEventListener("click", buttonclick2);
    function buttonclick2() {
        document.location.href = "#eis";
        side.setAttribute("class", "sortenside");
        kugel.style.display = "none";
        eis.style.display = "block";
        eis.insertBefore(side, sorten);
    }
    document.getElementById("button2").addEventListener("click", buttonclick3);
    function buttonclick3() {
        document.location.href = "#saucetopping";
        side.setAttribute("class", "sauceside");
        sauceside.appendChild(side);
        eis.style.display = "none";
        saucetop.style.display = "block";
    }
    document.getElementById("button3").addEventListener("click", buttonclick4);
    function buttonclick4() {
        document.location.href = "#realtoppings";
        topside.appendChild(side);
        saucetop.style.display = "none";
        toppingtest.style.display = "block";
    }
    //#endregion kugel
    //#region flavour
    let reminder = document.createElement("p");
    reminder.setAttribute("id", "reminder");
    let z = 0;
    let insgesamt = 0;
    let sorte = [];
    let check = false;
    addflavour();
    function addflavour() {
        let img = document.createElement("img");
        setAttributes(img, 1, "home", "home", "home.png");
        img.addEventListener("click", exit);
        eis.appendChild(img);
        console.log("kugel" + howmany);
        for (let i = 0; i < flavour.length; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "flavour");
            sorten.appendChild(div);
            let img = document.createElement("img");
            setAttributes(img, 0, "", flavour[i], "img/" + flavour[i] + ".png");
            div.appendChild(img);
            let text = document.createElement("h2");
            text.setAttribute("class", "sortentext");
            div.appendChild(text).innerHTML = flavour[i];
            let buttondiv = document.createElement("div");
            buttondiv.setAttribute("class", "buttons");
            div.appendChild(buttondiv);
            let minus = document.createElement("button");
            minus.innerHTML = "—";
            minus.setAttribute("class", "minus");
            minus.addEventListener("click", loeschenArtikel);
            buttondiv.appendChild(minus);
            let anzahl = document.createElement("p");
            buttondiv.appendChild(anzahl).innerHTML = "0";
            let plus = document.createElement("button");
            plus.innerHTML = "+";
            plus.setAttribute("class", "plus");
            plus.addEventListener("click", addArtikel);
            buttondiv.appendChild(plus);
            function loeschenArtikel() {
                if (parseInt(anzahl.innerHTML) != 0) {
                    z = parseInt(anzahl.innerHTML) - 1;
                    anzahl.innerHTML = z + "";
                    if (sorte[insgesamt - 1] == flavour[i])
                        sorte.pop();
                    else {
                        for (let y = sorte.length - 2; sorte[y] == flavour[i] || y == 0; y--) {
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
                    flavourentfernen(insgesamt, sorte);
                    insgesamt--;
                    if (window.matchMedia("(min-width: 1025px)").matches)
                        reminder.innerHTML = "";
                }
                if (insgesamt != howmany) {
                    document.getElementById("button2").style.display = "none";
                }
            }
            function addArtikel() {
                if (insgesamt < howmany) {
                    z = parseInt(anzahl.innerHTML) + 1;
                    anzahl.innerHTML = z + "";
                    insgesamt++;
                    flavourzeichnen(flavourklein[i], insgesamt);
                    if (sorte) {
                        sorte.push(flavour[i]);
                    }
                    else {
                        sorte = [flavour[i]];
                    }
                    localStorage.setItem("sorten", JSON.stringify(sorte));
                    console.log(howmany);
                }
                if (insgesamt == howmany) {
                    document.getElementById("button2").style.display = "block";
                    eis.appendChild(reminder);
                    if (window.matchMedia("(min-width: 1025px)").matches)
                        reminder.innerHTML = "Du hast schon " + localStorage.getItem("kugel") + " ausgewählt";
                }
            }
        }
    }
    function flavourzeichnen(_flavour, _zahl) {
        document.getElementById("kugel" + _zahl).style.backgroundImage = "url(flavourimg/" + _flavour + ".png)";
    }
    function flavourentfernen(_zahl, _flav) {
        let sortenstring = JSON.parse(localStorage.getItem("sorten"));
        console.log(sortenstring);
        document.getElementById("kugel" + _zahl).style.backgroundImage = "none";
        for (let i = 1; i <= howmany; i++) {
            document.getElementById("kugel" + i).style.backgroundImage = "url(flavourimg/" + sortenstring[i - 1] + ".png)";
        }
    }
    //#region top
    let wahl = false;
    let trash = 0;
    let countsauce = 0;
    addtop();
    function addtop() {
        let img = document.createElement("img");
        setAttributes(img, 1, "home", "home", "home.png");
        img.addEventListener("click", exit);
        saucetop.appendChild(img);
        for (let i = 0; i < sauce.length; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "sauce");
            topsauce.appendChild(div);
            let img = document.createElement("img");
            setAttributes(img, 0, "", sauce[i], "sauceimg/" + sauce[i] + ".png");
            div.appendChild(img);
            if (sauce[i] != "trash") {
                let saucename = document.createElement("h2");
                saucename.setAttribute("class", "sauce");
                saucename.innerHTML = sauce[i];
                div.appendChild(saucename);
            }
            div.addEventListener("click", sauceontop);
            function sauceontop() {
                zeichnesauce(sauce[i]);
                countsauce++;
                if (wahl == false) {
                    let preis = parseFloat(localStorage.getItem("preis"));
                    preis = preis + 1.0;
                    localStorage.setItem("preis", preis.toString());
                    wahl = true;
                }
                if (sauce[i] == "trash" && wahl == true) {
                    let preis = parseFloat(localStorage.getItem("preis"));
                    preis = preis - 1.0;
                    localStorage.setItem("preis", preis.toString());
                    localStorage.removeItem("Sauce");
                    wahl = false;
                }
            }
        }
    }
    function zeichnesauce(_sauce) {
        localStorage.setItem("Sauce", _sauce);
        if (countsauce > 0 && trash == 0) {
            side.removeChild(side.lastChild);
            countsauce = 0;
            trash++;
        }
        if (_sauce == "Erdbeere") {
            let img = document.createElement("img");
            setAttributes(img, 2, "sauceimg", _sauce, "sauceimg/erdbeere" + howmany + ".png");
            if (howmany == 3)
                img.setAttribute("class", "alignsauce3");
            if (howmany == 4)
                img.setAttribute("class", "alignsauce4");
            trash = 0;
            side.appendChild(img);
        }
        if (_sauce == "Karamell") {
            let img = document.createElement("img");
            setAttributes(img, 2, "sauceimg", _sauce, "sauceimg/karamell" + howmany + ".png");
            if (howmany == 3)
                img.setAttribute("class", "alignsauce3");
            if (howmany == 4)
                img.setAttribute("class", "alignsauce4");
            trash = 0;
            side.appendChild(img);
        }
        if (_sauce == "Schoko") {
            let img = document.createElement("img");
            setAttributes(img, 2, "sauceimg", _sauce, "sauceimg/schoko" + howmany + ".png");
            if (howmany == 3)
                img.setAttribute("class", "alignsauce3");
            if (howmany == 4)
                img.setAttribute("class", "alignsauce4");
            trash = 0;
            side.appendChild(img);
        }
        if (_sauce == "Vanille") {
            let img = document.createElement("img");
            setAttributes(img, 2, "sauceimg", _sauce, "sauceimg/vanille" + howmany + ".png");
            if (howmany == 3)
                img.setAttribute("class", "alignsauce3");
            if (howmany == 4)
                img.setAttribute("class", "alignsauce4");
            trash = 0;
            side.appendChild(img);
        }
    }
    let savetopping = [];
    let counttopping = 0;
    let toppingcount = 0;
    buildtopping();
    function buildtopping() {
        let img = document.createElement("img");
        setAttributes(img, 1, "home", "home", "home.png");
        img.addEventListener("click", exit);
        toppingtest.appendChild(img);
        for (let i = 0; i < toppings.length; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "topper");
            top.appendChild(div);
            let img = document.createElement("img");
            setAttributes(img, 0, "", toppings[i], "img/" + toppings[i] + ".png");
            div.appendChild(img);
            if (toppings[i] != "trash") {
                let topname = document.createElement("h2");
                topname.setAttribute("class", "topp");
                topname.innerHTML = toppings[i];
                div.appendChild(topname);
            }
            div.addEventListener("click", toptop);
            function toptop() {
                let string = toppings[i];
                if (toppings[i] != "trash" && savetopping.indexOf(string) == -1) {
                    counttopping += 0.1;
                    drawtop(toppings[i]);
                    if (savetopping) {
                        savetopping.push(toppings[i]);
                    }
                    else {
                        savetopping = [toppings[i]];
                    }
                    localStorage.setItem("Topping", JSON.stringify(savetopping));
                    toppingcount++;
                }
                else if (toppings[i] == "trash") {
                    while (toppingcount > 0) {
                        side.removeChild(side.lastChild);
                        toppingcount--;
                    }
                    counttopping = 0;
                    localStorage.removeItem("Topping");
                    savetopping = [];
                }
            }
        }
    }
    function drawtop(_topping) {
        let img = document.createElement("img");
        setAttributes(img, 1, "toppingonice", _topping, "toppingimg/" + _topping + ".png");
        if (_topping == "Streusel")
            img.setAttribute("id", "streusel");
        if (_topping == "Regenbogen")
            img.setAttribute("id", "rainbow");
        if (_topping == "Erdbeeren")
            img.setAttribute("id", "erdbeere");
        side.appendChild(img);
    }
    document.getElementById("button4").addEventListener("click", buttonclick5);
    function buttonclick5() {
        counttopping = parseFloat(localStorage.getItem("preis")) + counttopping;
        localStorage.setItem("preis", counttopping.toString());
        let h2 = document.createElement("h2");
        h2.innerHTML = "Du musst " + counttopping.toFixed(2) + "€ zahlen";
        h2.setAttribute("id", "orderhead");
        order.insertBefore(h2, document.getElementById("form"));
        document.location.href = "#order";
        if (window.matchMedia("(min-width: 1025px)").matches) {
            side.style.left = "60%";
            side.style.top = "20%";
            orderside.appendChild(side);
        }
        toppingtest.style.display = "none";
        order.style.display = "block";
    }
    document.getElementById("surprise").addEventListener("click", surpriseclick);
    function surpriseclick() {
        let div = document.createElement("div");
        div.setAttribute("id", "surprisememe");
        let img = document.createElement("img");
        setAttributes(img, 0, "", "meme", "GIS_Meme.png");
        div.appendChild(img);
        let a = document.createElement("a");
        a.setAttribute("href", "https://en.wikipedia.org/wiki/Distracted_boyfriend_meme#/media/File:Disloyal_man_with_his_girlfriend_looking_at_another_girl.jpg");
        a.setAttribute("target", "_blank");
        a.innerHTML = "Inspiration";
        div.append(a);
        order.appendChild(div);
    }
    document.getElementById("exit")?.addEventListener("click", exit);
    function exit() {
        document.location.href = "#start";
        order.style.display = "none";
        localStorage.clear();
        window.location.reload();
    }
})(IceCreamLand || (IceCreamLand = {}));
//# sourceMappingURL=main.js.map