<template>
  <button :class="customClass" :style="customStyle">{{ content }}</button>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
  customClass: string;
  customStyle: string;
}>();
</script>