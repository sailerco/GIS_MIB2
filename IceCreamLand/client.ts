namespace IceCreamLand {
    document.getElementById("abgeben")!.addEventListener("click", senden);
    
    async function senden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://dedflake.herokuapp.com/order?" + query.toString() + "&Behaelter=" + localStorage.getItem("Behälter") + "&kugeln=" + localStorage.getItem("kugel");
        /* let url: string = "http://localhost:8100/order?" + query.toString() + "&Behaelter=" + localStorage.getItem("Behälter") + "&kugeln=" + localStorage.getItem("kugel"); */
        let sortenstring: String[] = JSON.parse(localStorage.getItem("sorten")!);
        console.log(sortenstring);
        let toppingstring: String[] = JSON.parse(localStorage.getItem("Topping")!);
        for (let i: number = 0; i <= sortenstring.length; i++) {
            let zahl: number = i + 1;
            url = url + "&Sorte" + zahl.toString() + "=" + sortenstring[i]; 
        }
        if (localStorage.getItem("Sauce"))
            url = url + "&Sauce=" + localStorage.getItem("Sauce");
        if (localStorage.getItem("Topping")) {
            for (let i: number = 0; i <= toppingstring.length - 1; i++) {
                let zahl: number = i + 1;
                url = url + "&Topping" + zahl.toString() + "=" + toppingstring[i]; 
            }
        }
        url = url + "&preis=" + localStorage.getItem("preis");
        await fetch(url);
    }
}
