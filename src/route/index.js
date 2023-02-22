import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("views/home/index.vue"),
        },
      ],
    },
  ],
});

export default route;
