import Vue from "vue";
import Router from "vue-router";
import AppDashboard from "@/domain/dashboard/AppDashboard";
import AppLogin from "@/domain/auth/AppLogin";

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
/* component: () =>
  import( 'webpackChunkName: "about"' "./views/About.vue")*/

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dashboard",
      component: AppDashboard,
      meta: {
        forAuth: true
      }
    },
    {
      path: "/login",
      component: AppLogin,
      meta: {
        forVisitors: true
      }
    },

    {
      path: "*",
      redirect: "/login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.forVisitors)) {
    if (Vue.auth.isAuthenticated()) {
      next({
        path: "/dashboard"
      });
    } else next();
  } else if (to.matched.some(record => record.meta.forAuth)) {
    if (!Vue.auth.isAuthenticated()) {
      next({
        path: "/login"
      });
    } else next();
  } else next();
});

export default router;
