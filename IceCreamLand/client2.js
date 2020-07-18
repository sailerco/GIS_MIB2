"use strict";
var IceCreamLand;
(function (IceCreamLand) {
    let money = 0;
    let id = document.getElementById("Bestellungen");
    document.getElementById("retrieve").addEventListener("click", show);
    let staff = document.getElementById("Bestellungen");
    let preisp = document.createElement("h2");
    preisp.innerHTML = "Ich habe so viel verdient: " + parseFloat(localStorage.getItem("money")).toFixed(2) + "€";
    preisp.setAttribute("id", "Verdienst");
    let h1 = document.getElementById("headofstaff");
    h1.append(preisp);
    /* let count: number = 1; */
    async function show() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dedflake.herokuapp.com/" + "retrieve";
        /* let url: string = "http://localhost:8100/" + "retrieve"; */
        let response = await fetch(url);
        let reply = JSON.parse(await response.text());
        while (id.firstChild) {
            id.removeChild(id.firstChild);
        }
        if (staff.lastChild?.textContent == "Es gibt keine Bestellungen" || staff.lastChild?.textContent == "Immernoch keine Besetllungen") {
            staff.removeChild(staff.lastChild);
        }
        console.log(reply[0]);
        console.log(reply);
        for (let index = 0; index < reply.length; index++) {
            let div = document.createElement("div");
            div.setAttribute("class", "vorschau");
            let p = document.createElement("p");
            let number = index + 1;
            p.innerHTML = "Bestellung " + number + "<br>";
            p.innerHTML += "Name: " + reply[index].Vorname + " " + reply[index].Nachname + "<br>";
            p.innerHTML += "Adresse: <br>" + reply[index].Straße + "<br>" + reply[index].Ort;
            p.innerHTML += "Behälter: " + reply[index].Behaelter + "<br>";
            if (reply[index].kugeln == "1")
                p.innerHTML += "Kugeln: Eine <br>";
            else
                p.innerHTML += "Kugeln: " + reply[index].kugeln + " Stück: <br>";
            p.innerHTML += "1." + reply[index].Sorte1 + "<br>";
            if (2 <= parseInt(reply[index].kugeln))
                p.innerHTML += "2." + reply[index].Sorte2 + "<br>";
            if (3 <= parseInt(reply[index].kugeln))
                p.innerHTML += "3." + reply[index].Sorte3 + "<br>";
            if (4 <= parseInt(reply[index].kugeln))
                p.innerHTML += "4." + reply[index].Sorte4 + "<br>";
            if (reply[index].Sauce != undefined)
                p.innerHTML += "Sauce: " + reply[index].Sauce + "<br>";
            if (reply[index].Topping1 != undefined)
                p.innerHTML += "Toppings: " + reply[index].Topping1;
            if (reply[index].Topping2 != undefined)
                p.innerHTML += ", " + reply[index].Topping2;
            if (reply[index].Topping3 != undefined)
                p.innerHTML += ", " + reply[index].Topping3;
            if (reply[index].Topping4 != undefined)
                p.innerHTML += ", " + reply[index].Topping4;
            p.innerHTML += "<br> Extra Wünsche: " + reply[index].Kommentar + "<br>";
            console.log("test: " + parseFloat("AAA"));
            p.innerHTML += "<br> PREIS: " + reply[index].preis + "<br>";
            let img = document.createElement("img");
            img.setAttribute("src", "img/trash.png");
            img.setAttribute("alt", "trash");
            img.setAttribute("id", "trash");
            img.addEventListener("click", deletelast);
            let divforbutton = document.createElement("div");
            divforbutton.setAttribute("id", "Gewinn" + index);
            if (reply[index].preis != "I got the money") {
                let button = document.createElement("button");
                button.innerHTML = "Get Money";
                button.setAttribute("id", "b" + index);
                button.setAttribute("class", "vorschau_button");
                divforbutton.appendChild(button);
                button.addEventListener("click", getPrice);
            }
            div.appendChild(p);
            div.appendChild(img);
            div.appendChild(divforbutton);
            staff.appendChild(div);
            function deletelast() {
                deleteOne(reply[index]._id);
            }
            function getPrice() {
                document.getElementById("b" + index)?.removeEventListener("click", getPrice, false);
                getthemoney(reply[index]._id, reply[index].preis, index);
            }
        }
        if (reply.length == 0) {
            let div = document.createElement("div");
            div.setAttribute("class", "vorschau");
            let p = document.createElement("p");
            p.innerHTML = "Immernoch keine Besetllungen";
            div.appendChild(p);
            staff.appendChild(div);
        }
    }
    document.getElementById("delete").addEventListener("click", deleteall);
    async function deleteall() {
        let url = "https://dedflake.herokuapp.com/" + "delete";
        /* let url: string = "http://localhost:8100/" + "delete"; */
        let response = await fetch(url);
        while (staff.firstChild) {
            staff.removeChild(staff.firstChild);
        }
        staff.setAttribute("id", "Bestellung");
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Es gibt keine Bestellungen";
        staff.appendChild(paragraph);
    }
    /* document.getElementById("deletelast")!.addEventListener("click", deletelast); */
    async function deleteOne(_idtodelete) {
        let url = "https://dedflake.herokuapp.com/deleteOne" + "?_id=" + _idtodelete;
        /* let url: string = "http://localhost:8100/deleteOne" + "?_id=" + _idtodelete; */
        await fetch(url);
        show();
    }
    async function getthemoney(_id, _preis, _index) {
        let url = "https://dedflake.herokuapp.com/getthemoney" + "?_id=" + _id;
        await fetch(url);
        if (localStorage.getItem("money")) {
            let m = parseFloat(localStorage.getItem("money")) + parseFloat(_preis);
            localStorage.setItem("money", m.toString());
        }
        else {
            localStorage.setItem("money", _preis);
        }
        preisp.innerHTML = "Ich habe so viel verdient: " + parseFloat(localStorage.getItem("money")).toFixed(2) + "€";
        preisp.setAttribute("id", "Verdienst");
        let h1 = document.getElementById("headofstaff");
        h1.append(preisp);
        show();
    }
})(IceCreamLand || (IceCreamLand = {}));
//# sourceMappingURL=client2.js.map