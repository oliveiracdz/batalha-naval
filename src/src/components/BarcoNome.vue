<template>
    <li :class="classes">
        {{value.isRevelado}}
        {{classes}}
    </li>
</template>

<script lang="ts">
    import { ref, watch } from "vue";
    import { Barco } from "../Models";

    export default {
        props: {
            value: Barco,
        },
        setup(props) {
            // const classes = ref({
            //     revelado: props.value.isRevelado,
            // });

            watch(
                () => props.value,
                () => {
                    console.log(`name is: ` + props.value.comprimento);
                }
            );

            return {
                classes: classes.value,
            };
        },
    };
</script>

<style lang="scss" scoped>
    .revelado {
        text-decoration: line-through;
    }
</style>
