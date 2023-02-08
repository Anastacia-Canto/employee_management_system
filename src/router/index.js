import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../App.vue"
import WorkspaceView from "../views/WorkspaceView.vue";
import EmployeesComp from "../components/EmployeesComp.vue";
import AddWorkspaceView from "../views/AddWorkspaceView.vue";

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
    path: "/workspaces",
    name: "workspaces",
    component: WorkspaceView,
  },
  {
    path: "/employees",
    name: "employees",
    component: EmployeesComp,
  },
  {
    path: "/addWorkspace",
    name: "addWorkspace",
    component: AddWorkspaceView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
