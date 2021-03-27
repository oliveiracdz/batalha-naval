<template>
    <div class="grid">
        <div id="layout">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr v-for="(row,y) in game.matrix.linhas" :key="y">
                    <BarcoCelula v-for="(celula,x) in game.matrix.colunas" :key="x" :value="game.matrix.find(x,y)" @click="game.revelar(x,y)" />
                </tr>
            </table>

            <div>
                <BarcoPainel :value="game.barcos" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Game } from "../services";
    import { ref } from "vue";
    import BarcoCelula from "./BarcoCelula.vue";
    import BarcoPainel from "./barco-painel/BarcoPainel.vue";

    export default {
        setup(props) {
            const game = ref(new Game(10, 10));

            return {
                game,
            };
        },
        components: {
            BarcoPainel,
            BarcoCelula,
        },
    };
</script>

<style lang="scss" scoped>
    .grid {
        display: grid;
    }

    #layout {
        display: grid;
        grid-template-rows: 1fr auto;
        margin: 0 auto;
    }

    table {
        margin: 0 auto;
        border: 0;
        text-align: center;
    }
</style>
