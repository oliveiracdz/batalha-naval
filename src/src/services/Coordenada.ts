export class Coordenada {
    constructor(public x: number, public y: number) {

    }

    static random = (): Coordenada => {
        const x = Math.round(Math.random() * 10);
        const y = Math.round(Math.random() * 10);

        return new Coordenada(x, y);
    }
}