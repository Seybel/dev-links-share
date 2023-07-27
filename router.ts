import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./src/components/HelloWorld.vue";
import Login from "./src/pages/Login.vue"
import Links from "./src/pages/Links.vue"
import Profile from "./src/pages/Profile.vue"

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
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
