import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { 
            path: '/', 
            name: 'Home',
            component: Home 
        },
        { 
            path: '/hello', 
            name: 'HelloWorld',
            component: HelloWorld 
        }
    ]
  })

  export default router