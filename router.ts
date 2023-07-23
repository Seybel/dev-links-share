import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./src/components/HelloWorld.vue";

// login, links, profile, preview
const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
