<template>
    <div class="flex w-full h-full items-center justify-center bg-[#242424]">
        <div class="flex items-center flex-col">
            <h1 class="text-[3.2em]">{{ props.message }}</h1>
            <div class="p-8">
                <button @click="count++" class="px-[1.2em] py-[0.6em] bg-[#1a1a1a] rounded-[8px] border-[1px] border-transparent transition-colors duration-[.25s] hover:border-[#646cff]">Count is {{ count }}</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const count = ref(0);

const props = defineProps<{
    message: string
}>();

</script>

<style lang="scss" scoped>
* {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: #ffffffde;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

.lh-1 {
    line-height: 1.1;
}
</style>