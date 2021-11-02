import { Adress } from "./adress";

export class User {
    private idUser!:number;
    private nom!:string;
    private prenom!:string;
    private login!:string;
    private mdp!:string;
    private statue!:string;
    private score!:number;
    private adresse!:Adress;

    constructor(){}
}
