import { createRouter, createWebHistory } from 'vue-router'

import Ingreso from './components/Ingreso.vue'
import Respuestas from './components/Respuestas.vue'


const routes = [
    { path: '/', redirect: '/ingreso' },
    { path: '/ingreso', component: Ingreso },
    { path: '/respuestas', component: Respuestas },

    { path: '/:pathmatch(.*)*', redirect: '/ingreso' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router