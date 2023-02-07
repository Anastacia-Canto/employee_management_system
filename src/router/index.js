import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../App.vue"
import ManagementView from "../views/ManagementView.vue";
import TechView from "../views/TechView.vue";
import DesignView from "../views/DesignView.vue";
import MarketingView from "../views/MarketingView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/management",
    name: "management",
    component: ManagementView,
  },
  {
    path: "/tech",
    name: "tech",
    component: TechView,
  },
  {
    path: "/design",
    name: "design",
    component: DesignView,
  },
  {
    path: "/marketing",
    name: "marketing",
    component: MarketingView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
