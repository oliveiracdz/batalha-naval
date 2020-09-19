export class Coordenada {
    constructor(public x: number, public y: number) {

    }

    static random = (): Coordenada => {
        const x = Math.round(Math.random() * 10);
        const y = Math.round(Math.random() * 10);

        return new Coordenada(x, y);
    }
}

export class Celula extends Coordenada {
    constructor(public x: number, public y: number, public isBarco: boolean) {
        super(x, y);
    }

    isRevelado: boolean = false;

    revelar = () => this.isRevelado = true
}

export enum Direcao {
    Horizontal = 0,
    Vertical = 1
}

export class Barco {
    public coordenadas: Coordenada[]

    constructor(inicio: Coordenada, direcao: Direcao) {
        const coordenadas = []
        const isHorizontal = direcao === Direcao.Horizontal
        const isVertical = direcao === Direcao.Vertical
        const largura = Math.random() > 0.7 ? 3 : 2

        console.log(largura);


        for (let i = 0; i < largura; i++) {
            const x = isHorizontal ? inicio.x + i : inicio.x
            const y = isVertical ? inicio.y + i : inicio.y

            coordenadas.push(new Coordenada(x, y))
        }

        this.coordenadas = coordenadas;
    }
}