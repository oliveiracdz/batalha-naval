import { Barco, Direcao, Matrix } from '../Models'

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
            const comprimento = Math.floor(Math.random() * 3) + 1
            const direcao = Math.random() > 0.5 ? Direcao.Horizontal : Direcao.Vertical
            const { x, y } = this.matrix.random()
            const barco = this.matrix.addBarco(x, y, direcao, comprimento)

            if (barco) {
                this.barcos.push(barco)
                barcoQuantidade--;
            }
        }
    }
}