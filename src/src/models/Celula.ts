import { Coordenada } from './Coordenada'

export class Celula extends Coordenada {
    constructor(public x: number, public y: number, public isBarco: boolean) {
        super(x, y);
    }

    isRevelado: boolean = false;

    revelar = () => this.isRevelado = true
}
