import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Today from "@/views/Today/Today.vue";
import Week from "@/views/Week/Week.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
