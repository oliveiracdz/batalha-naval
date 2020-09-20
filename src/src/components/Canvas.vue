<template>
    <canvas ref="canvas"
        :height="game.linhas"
        :width="game.colunas"
        :style="style"
        @click="click">
    </canvas>

</template>

<script lang="ts">
    import { Celula, Coordenada, Barco, Direcao } from "../models";
    import { Game, Renderer } from "../services";
    import { ref, onMounted } from "vue";

    export default {
        setup(props) {
            const canvas = ref<HTMLCanvasElement>(null);
            const game = new Game(10, 23);
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
                game,
                canvas,
                click,
                style: {
                    width: 40 * game.colunas + "px",
                    height: 40 * game.linhas + "px",
                },
            };
        },
    };
</script>
<style>
    canvas {
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }
</style>
