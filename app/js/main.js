import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./../css/reset.scss"
import VueCookies from 'vue-cookies'
Vue.config.productionTip = false
Vue.use(VueCookies)

router.beforeEach((to, transition, next) => {
    if (to.fullPath == "/my") {
        if (!VueCookies.isKey('user')) {
            next({
                path: "/login"
            })
        } else {
            next()
        }
    }
    next()
})
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: {
        App
    },
    template: "<App/>",
})
/* eslint-enable no-new */