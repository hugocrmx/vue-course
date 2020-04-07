import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

const routes = [
        { path: "/", name: "home", component: Home },
        { path: "/about", component: About }
    ];

export const router = new VueRouter({
  routes
});