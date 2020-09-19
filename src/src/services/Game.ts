import { Barco, Celula, Coordenada, Direcao } from '../Models'

export class Game {
    public celulas: Celula[] = []
    public barcos: Barco[]

    constructor() {
        this.criarBarcos()
    }

    public revelar(x: number, y: number) {
        const celula = this.celulas.find((p) => p.x === x && p.y === y);
        celula.revelar();
    }

    private criarBarcos() {
        const range = [...Array(10).keys()];
        this.barcos = range.map(
            (i) => new Barco(Coordenada.random(), (i % 2) as Direcao)
        );

        const coordenadas = this.barcos
            .map((p) => p.coordenadas)
            .reduce((p, q) => p.concat(q), []);

        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const isBarco = coordenadas.some(
                    (p) => p.x === x && p.y === y
                );

                this.celulas.push(new Celula(x, y, isBarco));
            }
        }
    }
}