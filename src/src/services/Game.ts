import { Barco, Direcao, Matrix } from '../Models'
import { Random } from './Random'

export class Game {
    public barcos: Barco[] = []
    public matrix: Matrix

    constructor(public linhas: number, public colunas: number) {
        this.matrix = new Matrix(this.linhas, this.colunas)
        this.criarBarcos()
    }

    public revelar(x: number, y: number) {
        const celula = this.matrix.find(x, y)

        celula.revelar();
    }

    private criarBarcos() {
        let barcoQuantidade = this.colunas

        while (barcoQuantidade > 0) {
            const comprimento = Random.between(1, 3)
            const direcao = Random.between(0, 1) as Direcao.Horizontal
            const { x, y } = this.matrix.random()
            const barco = this.matrix.addBarco(x, y, direcao, comprimento)

            if (barco) {
                this.barcos.push(barco)
                barcoQuantidade--;
            }
        }
    }
}