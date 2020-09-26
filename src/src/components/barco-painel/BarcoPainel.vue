<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{item.nome}}: {{item.revelado}}/{{item.total}}
        </li>
    </ul>
</template>

<script lang="ts">
    import { computed, PropType } from "vue";
    import { Barco } from "../../Models";

    export default {
        props: {
            value: Array as PropType<Barco[]>,
        },
        setup(props) {
            const items = computed(() => {
                return props.value
                    .map((p) => p.nome)
                    .filter((p, i, a) => a.indexOf(p) == i)
                    .map((p) => {
                        const barcos = props.value.filter((x) => x.nome == p);
                        const total = barcos.length;
                        const revelado = barcos.filter((p) => p.isRevelado).length;

                        return {
                            nome: p,
                            total,
                            revelado,
                            finalizado: total == revelado,
                        };
                    });
            });

            return {
                items,
            };
        },
    };
</script>

<style lang="scss" scoped>
</style>
