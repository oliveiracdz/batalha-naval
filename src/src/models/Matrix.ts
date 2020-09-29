import { Barco, Celula, Direcao } from '../Models'

export class Matrix {

    private lista: Celula[] = []

    constructor(public linhas: number, public colunas: number) {
        for (let x = 0; x < this.colunas; x++) {
            for (let y = 0; y < this.linhas; y++) {
                this.push(new Celula(x, y))
            }
        }
    }

    public find(x: number, y: number) {
        return this.lista.find(p => p.x == x && p.y == y)
    }

    public addBarco(x: number, y: number, direcao: Direcao, comprimento: number) {
        const celulas = [];

        for (let i = 0; i < comprimento; i++) {
            const x1 = direcao == Direcao.Vertical ? x + i : x
            const y1 = direcao != Direcao.Vertical ? y + i : y

            if (!this.canPush(x1, y1))
                return null;

            celulas.push(new Celula(x1, y1, direcao, `B${i + 1}_${comprimento}`))
        }

        celulas.forEach(p => this.push(p))

        return new Barco(celulas)
    }

    private canPush(x: number, y: number): boolean {
        const point = this.find(x, y)

        return point && !point.isBarco
    }

    private push(celula: Celula) {
        this.lista = this.lista.filter(p => p != this.find(celula.x, celula.y))
        this.lista.push(celula)
    }

    random = () => {
        const x = Math.round(Math.random() * this.colunas - 1);
        const y = Math.round(Math.random() * this.linhas - 1);

        return new Celula(x, y);
    }
}