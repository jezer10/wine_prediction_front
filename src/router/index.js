import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Landing from "@/views/Landing.vue";
import Clustering from "@/views/Clustering.vue";
import Prediction from "@/views/Prediction.vue";
import Graph from "@/views/ClusteringGraph.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing, name: "landing" },

    {
      path: "/dashboard",
      component: Dashboard,
      name: "dashboard",
      redirect: {
        name: "clustering",
      },
      children: [
        {
          name: "graph",
          path: "graph",
          component: Graph,
        },
        {
          name: "clustering",
          path: "clustering",
          component: Clustering,
        },
        {
          name: "prediction",
          path: "prediction",
          component: Prediction,
        },
      ],
    },
  ],
});

export default router;
