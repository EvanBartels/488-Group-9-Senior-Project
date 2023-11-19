import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import AboutView from '@/components/AboutView.vue'

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
        },
        {
            path: '/about',
            name: 'AboutView',
            component: AboutView
        }
    ]
  })

  export default router