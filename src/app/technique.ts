import { Byte } from "@angular/compiler/src/util";

export class Technique {
    public idTechnique!:number;
    public nom!:string;
    public description !:string;
    public image!:Byte;

    constructor() {}
}
