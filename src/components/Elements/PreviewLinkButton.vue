<template>
    <div :class="`${bg} ${border} flex justify-between items-center px-4 h-[56px] w-[100%] rounded-md cursor-pointer p-4`">
        <div class="flex items-center gap-x-3">
            <slot name="icon"></slot>
            <p :class="`text-base font-normal ${textColor}`" >{{ linkName }}</p>
        </div>
        <img src="../../assets/icons/icon-arrow-right.svg" alt="">
    </div>
</template>

<script setup lang="ts">
defineProps<{
    linkName: string,
    bg: string | 'grey',
    border?: string | '',
    textColor?: string |'text-white'
}>()
</script>

<style scoped>

</style>