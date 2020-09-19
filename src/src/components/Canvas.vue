<template>
    <canvas ref="canvas" height="10" width="10" @click="click"></canvas>
</template>

<script lang="ts">
    import Celula from "../services/test";
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

                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        const color = Math.random() > probability ? "red" : "blue";
                        const element = new Celula(i, j, color);
                        cells.push(element);
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
