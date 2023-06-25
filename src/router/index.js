import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Landing from "@/views/Landing.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing, name:'landing' },
    {
      path: "/dashboard",
      component: Dashboard,
      name:'dashboard'
    },
  ],
});

export default router
