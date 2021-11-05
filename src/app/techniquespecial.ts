import { Injectable } from '@angular/core';
import { Technique } from './technique';

@Injectable({
    providedIn: 'root'
})

export class Techniquespecial extends Technique {

    technique: Technique = new Technique;
    t: any;

    constructor() {
        super();
    }

    setTechnique(t: any): void {
        localStorage.setItem('techniqueStockee', JSON.stringify(t));
    }

    getTechnique(): any {
        this.t = localStorage.getItem('techniqueStockee');
        return JSON.parse(this.t);
    }

}
