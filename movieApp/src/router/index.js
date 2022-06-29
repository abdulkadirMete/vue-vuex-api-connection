import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Popular from "../views/PopularView.vue";
import Contact from "../views/ContactView.vue";
import MyList from "../views/MyListView.vue";
import MovieDetail from "../views/MovieDetailView.vue";
import Login from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/popular",
      name: "popular",
      component: Popular,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/mylist",
      name: "mylist",
      component: MyList,
    },
    {
      path: "/movie/:id",
      name: "moviedetail",
      component: MovieDetail,
    },
    {
      path: "/login",
      name: "loginpage",
      component: Login,
    },
  ],
});

export default router;
