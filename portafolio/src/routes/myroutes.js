import { createRouter, createWebHashHistory } from 'vue-router'
import Page from '../views/Page.vue'

const routes = [
    {
        path: '/',
        name: ' Home',
        component: Page
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router