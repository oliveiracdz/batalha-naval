import { Celula } from './Celula'

export class Renderer implements IRenderer {

    constructor(private context: CanvasRenderingContext2D, private celulas: Celula[]) {
    }

    private renderizarCelula(element: Celula) {
        this.context.fillStyle = !element.isRevelado
            ? "#eaea3c"
            : element.isBarco
                ? "green"
                : "blue";

        this.context.fillRect(element.x, element.y, 1, 1);
    }

    render() {
        this.celulas.forEach(p => this.renderizarCelula(p));
    }
}

export interface IRenderer {
    render(element: Celula);
}