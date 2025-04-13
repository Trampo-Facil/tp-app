import type { RouteRecordRaw } from "vue-router";
import IndexVue from "../views/IndexVue.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/register",
    name: "register",
    component: IndexVue,
  },
];

export default routes;
