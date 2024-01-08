<template>
  <div>
    <Navbar v-if="showNavbar"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import Navbar from './components/Layout/Navbar.vue';
import { useRouter } from 'vue-router';

const showNavbar = ref(true);
const router = useRouter();

watch(
  () => router.currentRoute.value.name,
  (currentRouteName: any) => {
    const hideNavbarRoutes = ['Devlinks.Preview', 'Devlinks.Login'];
    showNavbar.value = !hideNavbarRoutes.includes(currentRouteName);
  }
);
</script>

<style scoped>
</style>
