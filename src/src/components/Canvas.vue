<template>
    <canvas ref="canvas" height="10" width="10" @click="click"></canvas>
</template>

<script lang="ts">
    import { Celula, Coordenada, Barco, Direcao } from "../services";
    import { ref, onMounted } from "vue";

    const probability = 0.8;

    export default {
        setup(props) {
            const canvas = ref<HTMLCanvasElement>(null);
            const celulas: Celula[] = [];
            let context: CanvasRenderingContext2D;

            const render = () => {
                celulas.forEach((element) => {
                    context.fillStyle = !element.isRevelado
                        ? "#eaea3c"
                        : element.isBarco
                        ? "green"
                        : "blue";
                    context.fillRect(element.x, element.y, 1, 1);
                });
            };

            onMounted(() => {
                context = canvas.value.getContext("2d");

                const range = [...Array(10).keys()];
                const barcos: Barco[] = range.map(
                    (i) => new Barco(Coordenada.random(), (i % 2) as Direcao)
                );

                const coordenadas = barcos
                    .map((p) => p.coordenadas)
                    .reduce((p, q) => p.concat(q), []);

                for (let x = 0; x < 10; x++) {
                    for (let y = 0; y < 10; y++) {
                        const isBarco = coordenadas.some(
                            (p) => p.x === x && p.y === y
                        );

                        celulas.push(new Celula(x, y, isBarco));
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

                const celula = celulas.find((p) => p.x === x && p.y === y);
                celula.revelar();
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
