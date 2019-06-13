import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import LogIn from "./views/LogIn.vue";
import Dashboard from "./views/Dashboard.vue";

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
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: LogIn
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
