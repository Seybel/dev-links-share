<template>
  <div>
    <div
      class="bg-white flex items-center justify-center rounded-2xl"
      :style="previewBg"
    >
      <PhonePreviewer />
    </div>
  </div>
</template>

<script setup lang="ts">
import PhonePreviewer from './PhonePreviewer.vue';
const previewBg = { width: "38rem", height: "53rem" };
</script>

<style scoped>
</style>