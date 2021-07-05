import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "landing",
        component: () => import("./components/Landing.vue")
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("./pages/Admin.vue"),
        meta: { authRequired: true }
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    const authRequired = to.matched.some(route => route.meta.authRequired);
    // If the route doesnt have a `meta.authRequired` property go on ahead!
    if (!authRequired) {
        return next();
    }
    // If we go this far then it must have the `meta.authRequired`. But is there is a user logged in? If so, then go right on ahead!
    if (store.getters["auth/loggedIn"]) {
        return next();
    }
    // The page requested is both secured and there is no logged in user detected. Sorry mate. No entry!
    console.warn("Page restricted, you need to login");
    next({ name: "landing", query: { redirectFrom: to.fullPath } });
});

export default router;