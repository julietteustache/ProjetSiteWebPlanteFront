import { User } from "./user";
import { Adress } from "./adress";
export class Evenement {
    public idEvenement!:number;
    public titre!:string;
    public description!:string;
    public NbParticipants!:number;
    public organisateur!:User;
    public adresse!:Adress;

    constructor(){}


}
