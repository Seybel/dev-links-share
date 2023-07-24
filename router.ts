import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./src/components/HelloWorld.vue";
import Login from "./src/pages/Login.vue"
import Links from "./src/pages/Links.vue"

// login, links, profile, preview
const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/links",
    component: Links
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
