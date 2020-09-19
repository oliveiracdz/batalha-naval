import { Coordenada } from '../Models';
import { Celula } from '../Models/Celula'

export class Renderer {

    constructor(private canvas: HTMLCanvasElement, private celulas: Celula[]) {
        this.context = canvas.getContext("2d");
    }

    private context: CanvasRenderingContext2D

    render() {
        this.celulas.forEach(p => this.renderizarCelula(p));
    }

    getPoint(event: MouseEvent): Coordenada {
        const rect = this.canvas.getBoundingClientRect();
        const point1 = event.clientX - rect.left;
        const point2 = event.clientY - rect.top;

        const x = Math.ceil(point1 / 40) - 1;
        const y = Math.ceil(point2 / 40) - 1;

        return new Coordenada(x, y)
    }

    private renderizarCelula(celula: Celula) {
        this.context.fillStyle = this.getColor(celula);
        this.context.fillRect(celula.x, celula.y, 1, 1);
    }

    private getColor(celula: Celula) {
        if (!celula.isRevelado)
            return "#eaea3c"

        return celula.isBarco ? "green" : "blue";
    }
}