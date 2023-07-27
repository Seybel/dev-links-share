<template>
    <div class="flex flex-col gap-y-1">
        <label :for="id" 
        :class="`text-dark-grey text-sm font-normal
            ${isError && 'text-red'}
        `"
        >{{ label }}</label>
        <div 
            :class="`w-[100%] flex items-center justify-between py-3 px-3.5 gap-x-4 text-base color-dark-grey rounded-lg placeholder-current::placeholder border border-border bg-white
                ${isFocused && 'outline-none border-purple shadow-light-purple'}
                ${isError && 'border-red shadow-none'}
            `"
            >
            <div class="w-[100%] flex justify-between align-center gap-x-4">
                <slot name="icon"></slot>
                <input 
                    :id="id"
                    class="w-[100%] text-dark-grey bg-white border-none outline-none placeholder-dark-grey placeholder-opacity-50"
                    :type="type" @change="handleChange"
                    :placeholder="placeholder"
                    @focus="toggleFocus"
                    @blur="toggleFocus"
                >
            </div>
            <p v-if="isError" class="text-red text-xs font-normal whitespace-nowrap">{{ errorMsg }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string,
    id: string,
    type: string,
    placeholder: string,
    errorMsg: string,
    isError: boolean
}>();

import { ref } from 'vue'
const emit = defineEmits(['valueChange', 'change'])
const isFocused = ref(false)

const toggleFocus = () => {
    isFocused.value = !isFocused.value
}

const handleChange = (e: any) => {
    emit('change', e)
    emit('valueChange', e.target.value)
}
</script>

<style scoped>
</style>