/* 定义路由组件 */
/** 
 * 静态导入
 */
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import User from '../views/User.vue'
// import NotFound from '../views/NotFound.vue'
// import News from '../views/News.vue'
// import Parent from '../views/Parent.vue'
// import StyleOne from '../views/StyleOne.vue'
// import StyleTwo from '../views/StyleTwo.vue'
// import Page from '../views/Page.vue'
// import ShopTop from '../views/ShopTop.vue'
// import ShopMain from '../views/ShopMain.vue'
// import ShopFooter from '../views/ShopFooter.vue'

/** 
 * 路由懒加载，用到再加载
 */
const Home = ()=>import('../views/Home.vue')
const About = ()=>import('../views/About.vue')
const User = ()=>import('../views/User.vue')
const NotFound = ()=>import('../views/NotFound.vue')
const News = ()=>import('../views/News.vue')
const Parent = ()=>import('../views/Parent.vue')
const StyleOne = ()=>import('../views/StyleOne.vue')
const StyleTwo = ()=>import('../views/StyleTwo.vue')
const Page = ()=>import('../views/Page.vue')
const ShopTop= ()=>import('../views/ShopTop.vue')
const ShopMain = ()=>import('../views/ShopMain.vue')
const ShopFooter = ()=>import('../views/ShopFooter.vue')

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    /* 重定向 */
    /* 也可以通过命令路由写名字 */
    // redirect: {name: "home"},
    // redirect: '/home'
    /* 方法 */
    redirect:(to)=>{
        // console.log(to);
        // to.name = "home"
        // return { path:'/home' }
        return { name: 'home' }
    }
},
{
    name: 'home',
    path: '/home',
    component: Home,
},
{
    path: '/about',
    component: About,
    /** 
     * 每路守卫，路由独享的首位
     */
    beforeEnter: (to, from, next) => {
        console.log(from);
        console.log(to);
        // if (token == token) {}
        next()
    }
},
{
    /* 动态路由 */
    /* :表示动态 */
    path: '/user/:id',
    component: User,
    /* 将route.params设置为组建的props */
    props: true
},
{
    /** 
     * 都不是的情况，使用正则的方式
     * 404页面
     */
    path: '/:path(.*)',
    component: NotFound
},
{
    /** 
     * 动态路由的参数一定是数字
     */
    name: "news",
    path: '/news/:id(\\d+)',

    /* 有多个参数 */
    // path: '/news/:id+',
    /* 参数可有可无 */
    // path: '/news/:id*',
    /* 参数可有可无，但不能多个参数，*可以有多个参数 */
    // path: '/news/:id?',
    component: News
}, 
{
    path: '/parent',
    /* 起别名，如果有多个别名，用数组的方式 alias:['/father', '/parent'] */
    alias: ['/father', '/fuqin'],
    component: Parent,
    children: [
        {
            path: 'styleone',
            component: StyleOne
        }, 
        {
            path: 'styletwo',
            component: StyleTwo
        }
    ],
},
{
    path: '/page',
    component: Page
},
{
    path: '/shop/:id*',
    // component: ShopMain
    components: {
        default: ShopMain,
        /* ShopTop与<router-view name>匹配 */
        ShopTop: ShopTop,
        ShopFooter: ShopFooter
    },
    props: {
        default: true, 
        ShopTop: false,
        ShopFooter: false
    }
}
]

const router = createRouter({
    /* 内部提供了history实现方式，这个用的是hash实现 */
    // history: createWebHashHistory(),
    /* HTML5实现history */
    /* 二者区别，有无#号 */
    history: createWebHistory(),
    routes
})

/** 
 * 全局守卫
 * next是一个门，需要next()通行证才能跳转页面
 */
router.beforeEach((to, from, next)=>{
    // console.log(from);
    // console.log(to);
    next();
})

export default router