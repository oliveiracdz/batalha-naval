export default class Coordenada {
    constructor(public x: number, public y: number, public color: string) {

    }

    clicada: boolean;

    render(canvas: CanvasRenderingContext2D) {
        canvas.fillStyle = this.clicada ? this.color : 'green'
        canvas.fillRect(this.x, this.y, 1, 1);
    }

    clicar = () => this.clicada = true
}