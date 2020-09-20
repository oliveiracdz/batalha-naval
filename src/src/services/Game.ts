import { Barco, Celula, Coordenada, Direcao } from '../Models'

export class Game {
    public celulas: Celula[] = []
    public barcos: Barco[]

    constructor(public linhas: number, public colunas: number, private barcosQtd: number = 15) {
        this.criarBarcos()
    }

    public revelar(x: number, y: number) {
        const celula = this.celulas.find((p) => p.x === x && p.y === y);
        celula.revelar();
    }

    private criarBarcos() {
        const range = [...Array(this.barcosQtd).keys()];
        this.barcos = range.map(
            (i) => new Barco(Coordenada.random(this.linhas, this.colunas), (i % 2) as Direcao)
        );

        const coordenadas = this.barcos
            .map((p) => p.coordenadas)
            .reduce((p, q) => p.concat(q), []);

        for (let x = 0; x < this.colunas; x++) {
            for (let y = 0; y < this.linhas; y++) {
                const isBarco = coordenadas.some(
                    (p) => p.x === x && p.y === y
                );

                this.celulas.push(new Celula(x, y, isBarco));
            }
        }
    }
}