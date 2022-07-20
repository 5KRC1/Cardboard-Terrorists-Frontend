import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue'

const routes: Array<RouteConfig> = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "About",
    path: "/about",
    component: About
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});
