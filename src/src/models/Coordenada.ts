export class Coordenada {
    constructor(public x: number, public y: number) {

    }

    static random = (linhas: number, colunas: number): Coordenada => {
        const x = Math.round(Math.random() * colunas);
        const y = Math.round(Math.random() * linhas);

        return new Coordenada(x, y);
    }
}