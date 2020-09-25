import { Celula } from '../Models'

export class Matrix extends Array<Array<Celula>> {

    constructor(public linhas: number, public colunas: number) {
        super()
        for (let x = 0; x < this.linhas; x++) {
            this[x] = []

            for (let y = 0; y < this.colunas; y++) {
                this[x].push(new Celula(x, y, `${x},${y}`))
            }
        }
    }


    public exists(x: number, y: number): boolean {
        return this[y] && !!this[y][x]
    }

    public isEmpty(x: number, y: number): boolean {
        if (!this.exists(x, y))
            return false;

        return !this[y][x].isBarco
    }
}