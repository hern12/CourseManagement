import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/CreateCourse",
      name: "createCourse",
      component: () => import("../views/CreateCourseForm.vue")
    },
    {
      path: "/Profile",
      name: "profile",
      component: () => import("../views/Profile.vue")
    }
  ]
});
