<template>
    <td :class="classes" @click="emit('click', {x,y})">
    </td>
</template>

<script lang="ts">
    import { Celula, Direcao } from "../Models";
    import { computed, PropType } from "vue";

    export default {
        props: { value: Celula },
        setup(props, { emit }) {
            const classes = computed(function () {
                const celula = props.value;

                return {
                    [props.value.value]: true,
                    hasBarco: celula.isBarco,
                    vertical: celula.direcao != Direcao.Vertical,
                    revelado: true, //props.value.isRevelado,
                };
            });

            return {
                celula: props.value,
                classes,
                emit,
            };
        },
    };
</script>

<style lang="scss" scoped>
    td {
        height: 40px;
        width: 40px;
        cursor: pointer;
        background-image: none;
        background-color: yellow;
        border: solid 1px #e8e83e;

        &.revelado {
            border: none;
            background-color: #3197ff7d;

            &.hasBarco {
                background-repeat: no-repeat;
                background-size: cover;
                background-repeat: no-repeat;
                background-position-y: center;

                &.B1_1 {
                    transform: rotate(0) !important;
                    background-size: contain;
                    background-image: url("https://svgsilh.com/svg/2030658.svg");
                }

                &[class*="_2"] {
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/1/1d/SVG_boat.svg");
                }
                &.B1_2 {
                    background-position-x: 0%;
                }
                &.B2_2 {
                    background-position-x: 130%;
                }

                &[class*="_3"] {
                    background-image: url("/cruzador.svg");
                }
                &.B1_3 {
                    background-position-x: 0%;
                }
                &.B2_3 {
                    background-position-x: 50%;
                }
                &.B3_3 {
                    background-position-x: 100%;
                }
            }

            &.vertical {
                // background-image: url("/cruzador.svg");
                background-size: cover;
                transform: rotate(90deg);
            }
        }
    }
</style>
