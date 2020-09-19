import { Coordenada } from './Coordenada'
import { Direcao } from './Direcao'

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