import { Celula } from './'

export class Barco {

    constructor(public celulas: Celula[]) { }

    public get localizado() { return this.celulas.every(p => p.isRevelado); }
    public get comprimento() { return this.celulas.length; }
    public get nome() {
        switch (this.comprimento) {
            case 2: return 'Fragata';
            case 3: return 'Cruzador';
            default: return 'Barco';
        }
    }

}