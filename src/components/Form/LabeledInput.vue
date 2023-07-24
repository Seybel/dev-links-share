<template>
    <div 
        :class="`w-[100%] min-w-[440px] max-w-max flex items-center py-3 px-3.5 gap-x-4 text-base color-dark-grey rounded-lg placeholder-current::placeholder border border-border bg-white
            ${isFocused && 'outline-none border-purple shadow-light-purple'}
        `"
        >
        <slot name="icon"></slot>
        <input 
            class="text-dark-grey bg-white border-none outline-none"
            type="text" @change="handleChange"
            @focus="toggleFocus"
            @blur="toggleFocus"
        >
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['valueChange', 'change'])
const isFocused = ref(false)

const toggleFocus = () => {
    isFocused.value = !isFocused.value
}

const handleChange = (e) => {
    emit('change', e)
    emit('valueChange', e.target.value)
}
</script>

<style scoped>

</style>