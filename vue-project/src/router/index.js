import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import HelloWorld from '@/views/HelloWorld.vue'
import AboutView from '@/views/AboutView.vue'
import DrinkCreationView from '@/views/DrinkCreationView.vue'
import LoginView from '@/views/LoginView.vue'
import IngredientSelector from '@/components/IngredientSelector.vue'

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
        },
        {
            path: '/login',
            name: 'LoginView',
            component: LoginView
        },
        {
            path: '/experimental',
            name: 'IngredientSelector',
            component: IngredientSelector
        }
    ]
  })

  export default router