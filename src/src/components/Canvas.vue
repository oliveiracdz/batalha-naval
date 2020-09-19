<template>
    <canvas ref="canvas" height="10" width="10" @click="click"></canvas>
</template>

<script lang="ts">
    import { Celula, Coordenada, Barco, Direcao } from "../models";
    import { Game, Renderer } from "../services";
    import { ref, onMounted } from "vue";

    const probability = 0.8;

    export default {
        setup(props) {
            const canvas = ref<HTMLCanvasElement>(null);
            const game = new Game();
            let renderer: Renderer;

            onMounted(() => {
                renderer = new Renderer(canvas.value, game.celulas);

                renderer.render();
            });

            const click = (event: MouseEvent) => {
                const { x, y } = renderer.getPoint(event);
                game.revelar(x, y);
                renderer.render();
            };

            return {
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
