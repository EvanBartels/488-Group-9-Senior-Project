import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import AboutView from '@/components/AboutView.vue'
import DrinkCreationView from '@/components/DrinkCreationView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Try to follow naming conventions for routes.
        // This means lower case and use dashes instead of spaces. -Mike
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
        },
        {
            path: '/drink-creation',
            name: 'DrinkCreationView',
            component: DrinkCreationView
        }
    ]
  })

  export default router