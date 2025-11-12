import { createRouter, createWebHashHistory } from 'vue-router'
import PAge from '../views/PAge.vue'

const routes = [
    {
        path: '/',
        name: ' Home',
        component: PAge
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router