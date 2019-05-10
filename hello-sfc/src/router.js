import Vue from "vue";
import Router from "vue-router";

import Top from "./components/films/Top.vue";
import Now from "./components/films/Now.vue";
import Soon from "./components/films/Soon.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      components: {
        default: Top,
        now: Now,
        soon: Soon
      }
    },
    {
      path: "/top",
      name: "top",
      props: true,
      component: Top
    },
    {
      path: "/now",
      name: "now",
      props: true,
      component: Now
    },
    {
      path: "/soon",
      name: "soon",
      props: true,
      component: Soon
    }
  ]
});