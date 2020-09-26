<template>
    <div class="grid">
        <div id="layout">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr v-for="(row,x) in game.matrix" :key="x">
                    <td v-for="(celula,y) in row" :key="y" @click="game.revelar(x,y)" :class="celula">
                        {{x}},
                        {{y}}
                        {{celula.isRevelado}}
                    </td>
                </tr>
            </table>

            <div>
                <ul>
                    <BarcoNome v-for="(barco, index) in game.barcos" :key="index" :value="barco"></BarcoNome>
                </ul>
                <pre>{{game.barcos}}</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Game } from "../services";
    import { ref } from "vue";
    import BarcoNome from "./BarcoNome.vue";

    export default {
        setup(props) {
            const game = ref(new Game(10, 15));

            return {
                game,
            };
        },
        components: {
            BarcoNome,
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
        border: solid 1px #e8e83e;
        background-color: yellow;
        cursor: pointer;
        height: 40px;
        width: 40px;

        &.isBarco {
            background-color: green;
        }
    }
</style>
