import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Users from './components/user/Users.vue'
import Rights from './components/power/Rights.vue'
import Roles from './components/power/Roles.vue'
import Cate from './components/goods/Cate.vue'
import Params from './components/goods/Params.vue'
import Add from './components/goods/Add.vue'
import List from './components/goods/List.vue'
import Order from './components/order/Order.vue'
import Report from './components/report/Report.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/', redirect: '/Login' },
        { path: '/login', component: Login },
        {
            path: '/home',
            component: Home,
            redirect: '/welcome',
            children: [
                { path: '/welcome', component: Welcome },
                { path: '/users', component: Users },
                { path: '/rights', component: Rights },
                { path: '/roles', component: Roles },
                { path: '/categories', component: Cate },
                { path: '/params', component: Params },
                {
                    path: '/goods',
                    component: List,
                },
                { path: '/goods/add', component: Add },

                { path: '/orders', component: Order },
                { path: '/reports', component: Report },


            ]
        }

    ]
})

// 挂载路由导航守卫

// router.beforeEach((to, from, next) => {
//     //to将要访问的路径
//     // from代表从哪个路径跳转过来
//     // next 是个函数，表示放行
//     // next（）放行 next（“/login”）强制跳转

//     if (to.path === '/login') return next()
//         // 获取token
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
// })


router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()

    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})


export default router