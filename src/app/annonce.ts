import { User } from "./user";
import { Plante } from "./plante";



export class Annonce {

    public idAnnonce!:number;
    public stock!:number;
    public description!:string;
    public type!:string;
    public createur!:User;
    public plante!:Plante;

    constructor(){

    }

}
