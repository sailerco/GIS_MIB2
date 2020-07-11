namespace Aufgabe_11 {
    document.getElementById("button")!.addEventListener("click", senden);
    async function senden():Promise<void>{
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://dedflake.herokuapp.com/"  + "button";
        /* let url: string = "http://localhost:8100/" + "button"; */
        url = url + "?" + query.toString();

        await fetch(url);
        /* let form: HTMLFormElement = <HTMLFormElement> document.getElementById("form");
        form.reset(); */
    } 
    document.getElementById("retrieve")!.addEventListener("click", show);
    async function show(): Promise <void>{
        let url: string = "https://dedflake.herokuapp.com/" + "retrieve";
        /* let url: string = "http://localhost:8100/" + "retrieve"; */
        let response: Response = await fetch(url);
        let reply: string = await response.text();
        let paragraph: HTMLElement = document.createElement("p");
        /* if(reply.length == 2){
            paragraph.innerHTML = "Nein";
        }
        else{ */
        paragraph.innerHTML = reply;
        /* } */
        
        document.body.appendChild(paragraph);
    }
    document.getElementById("delete")!.addEventListener("click", deleteall);
    async function deleteall(): Promise <void>{
        let url: string = "https://dedflake.herokuapp.com/" + "delete";
        /* let url: string = "http://localhost:8100/" + "aaa"; */
        let response: Response = await fetch(url);

        let paragraph: HTMLElement = document.createElement("p");
        paragraph.innerHTML = "Datenbank ist leer";
        document.body.appendChild(paragraph);
    }
}
