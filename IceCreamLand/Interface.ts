namespace IceCreamLand{
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
    export const eispreis: Eis[] = [eineKugel, zweiKugel, dreiKugel, vierKugel];
    
}