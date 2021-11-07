import { Byte } from "@angular/compiler/src/util";

export class Plante {
        public idPlante!:number;
        public categorie!:string;
        public sousCategorie!:string;
        public espece!:string;
        public description!:string;
        public prix!:number;
        public calendrier!:string;
        public arrosage!:number;
        public exposition!:string;
        public image!:Byte;
    
        constructor(){}
    }
