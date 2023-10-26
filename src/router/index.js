import { createRouter,createWebHistory } from "vue-router";
import login from '@/view/login/login.vue';
import home from  '@/view/home/home.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:login,
        },
        {
            path: "/home",
            component: home,
        },
    ]
})
export default router;
