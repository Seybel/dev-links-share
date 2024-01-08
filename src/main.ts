import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../router";
import Axios from "./auth/Axios";
import { store } from "./store";



Axios.get("auth/checklogin")
  .then((r) => {
    console.log(r);
    // store.commit("UPDATE_USER_ID", r.data.data._id);
    store.setAuth(true);
  })
  .catch((e) => {
    // console.log(e);
    // router.push('/login')
    store.setAuth(false)
  })
  .finally(() => {
    const app = createApp(App);
    app.use(router);
    app.mount("#app");
    if(store.isAuthenticated){
        router.push('/')
    } else {
        router.push('/login')
    }
  });

