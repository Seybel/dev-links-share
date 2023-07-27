<template>
  <button :class="customClass" :style="customStyle">
    <slot name="icon"></slot>
  {{ content }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
  customClass?: string;
  customStyle?: string;
}>();
</script>