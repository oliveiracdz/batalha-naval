import { Direcao } from '../Models'

export class Celula {
    constructor(public x: number, public y: number, public direcao = Direcao.Horizontal, public value = `${x},${y}`) {
    }

    isRevelado: boolean = false;
    isBarco = this.value?.startsWith('B')

    revelar = function () {
        this.isRevelado = true;
    }
}
