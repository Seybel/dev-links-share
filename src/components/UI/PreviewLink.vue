<template>
  <div>
    <div
      class="bg-white flex items-center justify-center rounded-2xl"
      :style="previewBg"
    >
      <img
        src="../../assets/img/illustration-phone-mockup.svg"
        alt="Phone Preview"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const previewBg = { width: "38rem", height: "53rem" };
</script>

<style scoped>
</style>