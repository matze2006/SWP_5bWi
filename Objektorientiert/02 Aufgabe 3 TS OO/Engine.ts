export class Engine{
    private hersteller:string = "BMW";
    private ps:number = 120;
    private kraftstoff:string = "Diesel";

    constructor(hersteller:string, ps:number, kraftstoff:string){
        this.hersteller = hersteller;
        this.ps = ps;
        this.kraftstoff = kraftstoff;
    }
    
    getAllEngine():(string | number)[]{
        return [this.hersteller, this.ps, this.kraftstoff];
    }
}
