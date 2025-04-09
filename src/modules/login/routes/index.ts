import type { RouteRecordRaw } from "vue-router";
import IndexVue from "../views/IndexVue.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: IndexVue,
  },
];

export default routes;
