import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BidCalculatorView from "../views/BidCalculatorView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/bid-calculator",
    name: "bid-calculator",
    component: BidCalculatorView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
