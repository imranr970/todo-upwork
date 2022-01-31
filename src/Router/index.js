import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../Pages/Home.vue')
    },
    { 
        path: "/:catchAll(.*)",
        name: '404',
        component: () => import(/* webpackChunkName: "NotFound" */ '@/Pages/NotFound')
      }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router