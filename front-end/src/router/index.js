import Vue from "vue";
import Router from "vue-router";

const routerOptions = [{ path: "/cart", component: "Cart" }];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
