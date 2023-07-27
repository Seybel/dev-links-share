<template>
    <div>
      <div className="container mx-8 py-5">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-0"
        >
          <PreviewLink />
          <UpdateProfile />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import PreviewLink from "../components/UI/PreviewLink.vue";
  import UpdateProfile from "../components/UI/UpdateProfile.vue";
  </script>
  
  <style scoped></style>