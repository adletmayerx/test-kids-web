import { createRouter, createWebHistory } from "vue-router";
import { HomeView, LoginView, RegisterView } from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "404",
    //   component: HelloWorldVue,
    // },
  ],
});

export default router;
