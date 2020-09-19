<template>
    <canvas ref="canvas" height="10" width="10" @click="click"></canvas>
</template>

<script lang="ts">
    import Coordenada, { default as Celula, Barco } from "../services/test";
    import { ref, onMounted } from "vue";

    const probability = 0.8;

    export default {
        setup(props) {
            const canvas = ref<HTMLCanvasElement>(null);
            const cells: Celula[] = [];
            let context: CanvasRenderingContext2D;

            const render = () => {
                cells.forEach((element) => element.render(context));
            };

            onMounted(() => {
                context = canvas.value.getContext("2d");

                const barcos: Barco[] = [Barco.horizontal(new Coordenada(0, 0))];

                const coordenadas = barcos
                    .map((p) => p.coordenadas)
                    .reduce((p, q) => p.concat(q), []);

                for (let x = 0; x < 10; x++) {
                    for (let y = 0; y < 10; y++) {
                        const isBarco = coordenadas.find(
                            (p) => p.x === x && p.y === y
                        );

                        context.fillStyle = isBarco ? "green" : "blue";
                        // canvas.fillStyle = this.clicada ? this.color : 'green'
                        context.fillRect(x, y, 1, 1);
                    }
                }

                render();
            });

            const click = (event) => {
                const rect = canvas.value.getBoundingClientRect();
                const point1 = event.clientX - rect.left;
                const point2 = event.clientY - rect.top;

                const x = Math.ceil(point1 / 40) - 1;
                const y = Math.ceil(point2 / 40) - 1;

                const celula = cells.find((p) => p.x === x && p.y === y);
                celula.clicar();
                render();
            };

            return {
                render,
                canvas,

                click,
            };
        },
    };
</script>
<style>
    canvas {
        width: 400px;
        height: 400px;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }
</style>
