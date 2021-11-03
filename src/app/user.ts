import { Adress } from "./adress";

export class User {
    public idUser!:number;
    public nom!:string;
    public prenom!:string;
    public login!:string;
    private mdp!:string;
    public statue!:string;
    public score!:number;
    public adresse!:Adress;

    constructor(){}
}
