import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("../views/MonacoEditorView.vue"),
  },
  {
    path: "/examples",
    name: "examples",
    component: () => import("../views/ExamplesView.vue"),
  },
  {
    path: "/docs",
    name: "docs",
    component: () => import("../views/DocsView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
