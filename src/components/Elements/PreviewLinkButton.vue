<template>
    <div v-if="isPlaceholder" :class="`bg-light-grey h-[44px] w-[100%] rounded-md`"></div>
    <div v-else :class="`${height} ${bg} ${border} flex justify-between items-center px-4 w-[100%] rounded-md cursor-pointer py-2`">
        <div class="flex items-center gap-x-3">
            <slot name="icon"></slot>
            <p :class="`text-base font-normal ${textColor}`" >{{ linkName }}</p>
        </div>
        <img src="../../assets/icons/icon-arrow-right.svg" alt="">
    </div>
</template>

<script setup lang="ts">
interface Props {
    linkName?: string,
    bg: string,
    border?: string,
    textColor?: string,
    height?: string,
    isPlaceholder?: boolean
}

withDefaults(defineProps<Props>(), {
    linkName: "",
    bg: "grey",
    border: "",
    textColor: "text-white",
    isPlaceholder: false
})
</script>

<style scoped>

</style>