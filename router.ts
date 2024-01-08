import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "./src/pages/Login.vue"
import Links from "./src/pages/Links.vue"
import Profile from "./src/pages/Profile.vue"
import PreviewVue from "./src/pages/Preview.vue";
import { store } from "./src/store";

// login, links, profile, preview
const routes: Array<RouteRecordRaw> = [
  {
    name: "Devlinks.Home",
    path: "/",
    component: Links, // TODO: change to home page
  },
  {
    name: "Devlinks.Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Devlinks.Links",
    path: "/links",
    component: Links
  },
  {
    name: "Devlinks.Profile",
    path: "/profile",
    component: Profile
  },
  {
    name: "Devlinks.Preview",
    path: "/preview",
    component: PreviewVue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (store.isAuthenticated) {
    if (to.path === '/login'){
      next('/')
    } 
    else next();
  } else {
    if (to.path === '/login') next()
    else next('/login');
  }
});

export default router;
