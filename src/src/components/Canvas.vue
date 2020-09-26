<template>
    <div class="grid">
        <div id="layout">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr v-for="(row,x) in game.matrix" :key="x">
                    <td v-for="(celula,y) in row" :key="y" @click="game.revelar(x,y)" :class="celula">
                    </td>
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
    import BarcoPainel from "./barco-painel/BarcoPainel.vue";

    export default {
        setup(props) {
            const game = ref(new Game(10, 15));

            return {
                game,
            };
        },
        components: {
            BarcoPainel,
        },
    };
</script>

<style lang="scss" scoped>
    .grid {
        display: grid;
    }

    #layout {
        display: grid;
        grid-template-columns: 1fr auto;
        margin: 0 auto;
    }

    table {
        margin: 0 auto;
        border: 0;
        text-align: center;
    }

    td {
        height: 40px;
        width: 40px;
        cursor: pointer;
        background-image: none;
        background-color: yellow;
        border: solid 1px #e8e83e;

        &.isRevelado {
            border: none;
            background-color: #3197ff7d;

            &.isBarco {
                background-image: url("https://images.vexels.com/media/users/3/137945/isolated/preview/fbeb505577b4a8b8b87018f254d43c7e---cone-de-transporte-de-barco-by-vexels.png");
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }
</style>
