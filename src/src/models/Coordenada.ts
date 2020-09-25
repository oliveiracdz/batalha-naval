export class Coordenada {
    constructor(public x: number, public y: number) {

    }

    static random = (linhas: number, colunas: number): Coordenada => {
        const x = Math.round(Math.random() * colunas - 1);
        const y = Math.round(Math.random() * linhas - 1);

        return new Coordenada(x, y);
    }
}