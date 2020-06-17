namespace Aufgabe_8{
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", buttonclick); 
    async function urlAendern(): Promise<string>{
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://whatever.server/path/file";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        await fetch(url);
        return url;
    }
    async function buttonclick():  Promise<void> {
      get(await urlAendern());
    } 
    async function get(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let response2: String = await response.text();
        console.log("Response", response2);
    }
    
}