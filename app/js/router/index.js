import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "./../money/money.vue"
import My from "./../my/my.vue"
import Login from "./../login/login.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        },
        {
            path: "/money",
            name: "Money",
            component: Money
        },
        {
            path: "/my",
            name: "My",
            component: My
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ],
})