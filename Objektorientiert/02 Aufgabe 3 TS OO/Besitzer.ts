export class Besitzer{
    private vorname:string = "Max";
    private nachname:string = "Mustermann";
    private alter:number = 44;

    constructor(vorname:string, nachname:string, alter:number){
        this.vorname = vorname;
        this.nachname = nachname;
        this.alter = alter;
    }

    getAllBesitzer():(string | number)[]{
        return[this.vorname, this.nachname, this.alter];
    }
}