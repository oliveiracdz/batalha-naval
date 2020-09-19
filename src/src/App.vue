<template>
    <Canvas color="red" ref="canvas" />
</template>

<script lang="ts">
    import Canvas from "./components/Canvas.vue";
    import service from "./services/test";
    import { ref, onMounted } from "vue";

    export default {
        props: {
            test: Number,
        },
        setup() {
            return {};
        },
        components: {
            Canvas,
        },
    };
</script>
<style>
    html {
        background-color: grey;
        color: white;
    }
</style>
