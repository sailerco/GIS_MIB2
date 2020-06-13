namespace Aufgabe_7 {
    export interface Pokestar {
        kategorie: boolean; //true = pokemon
        name: string;
        image: string;
        description: string;
        price: number;
    }
    export let pokemonartikel: Pokestar[];
    communicate("side.json");

    export async function communicate(_url: RequestInfo): Promise<void> { //asynchron damit await fetch benutzt werden kann 
        let response: Response = await fetch(_url);
        pokemonartikel = await response.json();
        artikel();
    }
}