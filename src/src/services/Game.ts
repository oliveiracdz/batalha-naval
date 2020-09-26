import { Barco, Celula, Coordenada, Direcao, Matrix } from '../Models'

export class Game {
    public celulas = {}
    public barcos: Barco[] = []
    public matrix: Matrix

    constructor(public linhas: number, public colunas: number) {
        this.criarBarcos()
    }

    public revelar(x: number, y: number) {
        const celula = this.matrix[x][y];

        celula.revelar();
    }

    private criarBarcos() {
        const barcoQuantidade = this.colunas * 2
        this.matrix = new Matrix(this.linhas, this.colunas)

        for (let i = 0; i < barcoQuantidade; i++) {
            const barco = this.criarBarco()

            if (!barco)
                continue;

            barco.celulas.forEach(c => this.matrix[c.y][c.x] = c)

            this.barcos.push(barco)
        }
    }

    private criarBarco() {
        const celulas = [];
        const comprimento = Math.floor(Math.random() * 3) + 1
        const direcao = Math.random() > 0.5 ? Direcao.Horizontal : Direcao.Vertical

        let { x, y } = Coordenada.random(this.linhas, this.colunas)

        for (let i = 0; i < comprimento; i++) {
            const x1 = direcao == Direcao.Vertical ? x + i : x
            const y1 = direcao != Direcao.Vertical ? y + i : y

            if (!this.matrix.isEmpty(x1, y1))
                return null;

            celulas.push(new Celula(x1, y1, direcao, `B${i + 1}_${comprimento}`))
        }

        return new Barco(celulas)
    }
}