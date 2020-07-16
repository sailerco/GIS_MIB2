namespace IceCreamLand {
    interface Orders {
        _id: string;
        Vorname: string;
        Nachname: string;
        Straße: string;
        Ort: string;
        Kommentar: string;
        Behaelter: string;
        kugeln: string;
        Sorte1: string;
        Sorte2?: string;
        Sorte3?: string;
        Sorte4?: string;
        Sauce?: string;
        Topping1?: string;
        Topping2?: string;
        Topping3?: string;
        Topping4?: string;
        preis: string;
    }
    let money: number = 0;
    let id: HTMLElement = document.getElementById("Bestellungen") as HTMLElement;
    document.getElementById("retrieve")!.addEventListener("click", show);
    let staff: HTMLElement = document.getElementById("Bestellungen") as HTMLElement;
    let preisp: HTMLElement = document.createElement("h2");
    /* let count: number = 1; */
    async function show(): Promise <void> {
        let formData: FormData = new FormData(document.forms[0]); 
        /* let url: string = "https://dedflake.herokuapp.com/" + "retrieve"; */
        let url: string = "http://localhost:8100/" + "retrieve";
        let response: Response = await fetch(url);
        let reply: Orders[] = JSON.parse(await response.text());
        while (id.firstChild) {
            id.removeChild(id.firstChild);
        }
        if (staff.lastChild?.textContent == "Es gibt keine Bestellungen" || staff.lastChild?.textContent == "Immernoch keine Besetllungen") {
            staff.removeChild(staff.lastChild);
        }
        console.log(reply[0]);
        console.log(reply);
        for (let index: number = 0; index < reply.length; index++) {
            let div: HTMLDivElement = document.createElement("div");  
            div.setAttribute("class", "vorschau");
            let p: HTMLElement = document.createElement("p");
            let number: number = index + 1;
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
            
            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", "img/trash.png");
            img.setAttribute("alt", "trash");
            img.setAttribute("id", "trash");
            img.addEventListener("click", deletelast);

            let divforbutton: HTMLDivElement = document.createElement("div");  
            divforbutton.setAttribute("id", "Gewinn" + index);

            let button: HTMLElement = document.createElement("button");
            button.innerHTML = "Get Money";
            button.setAttribute("id", "b" + index);
            
            div.appendChild(p);
            div.appendChild(img);
            divforbutton.appendChild(button);
            div.appendChild(divforbutton);
            staff.appendChild(div);
            
            button.addEventListener("click", getPrice); 
            function deletelast(): void {
                deleteOne(reply[index]._id);
            }
            function getPrice(): void {
                document.getElementById("Gewinn" + index)?.removeChild(<Node>document.getElementById("b" + index));
                getthemoney(reply[index]._id, reply[index].preis, index);
            }
        }
        if (reply.length == 0) {
            let div: HTMLDivElement = document.createElement("div");  
            div.setAttribute("class", "vorschau");
            let p: HTMLElement = document.createElement("p");
            p.innerHTML = "Immernoch keine Besetllungen";
            div.appendChild(p);
            staff.appendChild(div);
        }
    }

    document.getElementById("delete")!.addEventListener("click", deleteall);
    async function deleteall(): Promise <void> {
        /* let url: string = "https://dedflake.herokuapp.com/" + "delete"; */
        let url: string = "http://localhost:8100/" + "delete";
        let response: Response = await fetch(url);
        while (staff.firstChild) {
            staff.removeChild(staff.firstChild);
        }

        staff.setAttribute("id", "Bestellung");
        let paragraph: HTMLElement = document.createElement("p");
        paragraph.innerHTML = "Es gibt keine Bestellungen";
        staff.appendChild(paragraph);
    }

    /* document.getElementById("deletelast")!.addEventListener("click", deletelast); */
    async function deleteOne(_idtodelete: string): Promise <void> {
        let url: string = "http://localhost:8100/deleteOne" + "?_id=" + _idtodelete;
        await fetch(url);
        show();
    }    
    async function getthemoney(_id: string, _preis: string, _index: number): Promise <void> {
        money += parseFloat(_preis);
        money.toLocaleString();
        preisp.innerHTML = "Bisher habe ich so viel verdient: " + money + "0€";
        preisp.setAttribute("id", "Verdienst");
        let h1: HTMLElement = document.getElementById("headofstaff") as HTMLElement;
        h1.append(preisp);
        let url: string = "http://localhost:8100/getthemoney" + "?_id=" + _id;
        await fetch(url); 
        show();
    }
}    