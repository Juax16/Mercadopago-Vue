import { createRouter, createWebHistory } from 'vue-router'
import DetalleVue from '../views/DetalleVue.vue'
import DetalleBs from '../views/DetalleBs.vue'
import DetalleFb from '../views/DetalleFb.vue'
import Cursos from '../views/Cursos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'cursos',
        component: Cursos
    },{
        path: '/curso/cursovue',
        name: 'vue',
        component: DetalleVue
    },{
        path: '/curso/cursobs',
        name: 'bs',
        component: DetalleBs
    },{
        path: '/curso/cursofb',
        name: 'fb',
        component: DetalleFb
    }
  ]
})

export default router
