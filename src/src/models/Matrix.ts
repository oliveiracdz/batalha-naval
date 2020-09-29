import { Barco, Celula } from '../Models'

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

    public addBarco(barco: Barco) {
        if (barco.celulas.every(p => this.canPush(p.x, p.y))) {
            barco.celulas.forEach(p => this.push(p))
            return true
        }

        return false
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