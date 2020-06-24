namespace Aufgabe_9 {
    document.getElementById("button")!.addEventListener("click", buttonclick); 
    /* let url: string = "https://dedflake.herokuapp.com/"; */
    
    async function buttonclick(): Promise<void> {
        let url: string = "https://dedflake.herokuapp.com";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "html" + "?" + query.toString(); //maybe broken

        let response: Response = await fetch(url);
        let reply: string = await response.text();

        let paragraph: HTMLElement = document.createElement("p");
        paragraph.innerHTML = reply;
        document.body.appendChild(paragraph);
    }

    document.getElementById("jsonbutton")!.addEventListener("click", jsonclick);
     
    async function jsonclick(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dedflake.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "json" + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json();

        console.log(responseText);
    }
    
}
