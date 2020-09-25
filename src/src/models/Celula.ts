export class Celula {
    constructor(public x: number, public y: number, public value: string) {
    }

    isRevelado: boolean = false;
    isBarco = this.value?.startsWith('B')

    revelar = function () {
        this.isRevelado = true;
    }
}
