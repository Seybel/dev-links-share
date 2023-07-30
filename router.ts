import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./src/components/HelloWorld.vue";
import Login from "./src/pages/Login.vue"
import Links from "./src/pages/Links.vue"
import Profile from "./src/pages/Profile.vue"
import PreviewVue from "./src/pages/Preview.vue";

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
  },
  {
    path: "/preview",
    component: PreviewVue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
