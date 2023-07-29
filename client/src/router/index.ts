import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "../components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorldVue,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: HelloWorldVue,
    },
  ],
});

export default router;
