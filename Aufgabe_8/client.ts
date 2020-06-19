namespace Aufgabe_8{
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", buttonclick); 

    async function buttonclick(): Promise<void>{
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dedflake.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        
/* 
        let response: Response = await fetch(url);
        let response2: string = await response.url;
        
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        console.log(response2); */

        /* let response: Response = await fetch(url);
        let response2: string = await response.url; */
        
        console.log((await fetch(url)).url);

    }
}