export default class Coordenada {
    constructor(public x: number, public y: number) {

    }

    clicada: boolean;

    clicar = () => this.clicada = true
}

export class Barco {

    constructor(public coordenadas: Coordenada[]) {

    }

    static horizontal = (inicio: Coordenada): Barco => {
        const coordenadas = []
        for (let i = 0; i < 3; i++) {
            coordenadas.push(new Coordenada(inicio.x + i, inicio.y))

        }
        console.log(coordenadas);

        return new Barco(coordenadas);
    }
}