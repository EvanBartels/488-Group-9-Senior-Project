import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import HelloWorld from '@/views/HelloWorld.vue'
import AboutView from '@/views/AboutView.vue'
import DrinkCreationView from '@/views/DrinkCreationView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import IngredientSelector from '@/components/IngredientSelector.vue'
import Dashboard from '@/views/UserDashboardView.vue'
import UserSettings from '@/views/UserSettingsView.vue'
import DrinkInfoDialog from '@/components/DrinkInfoDialog.vue'
import SaveIngredients from '@/views/SaveIngredientView.vue'
import FooterFile from '@/components/FooterFile.vue'

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
            name: 'DrinkInfoDialog',
            component: DrinkInfoDialog
        },
        {
            path: '/sign-up',
            name: 'SignUpView',
            component: SignUpView
        },
        {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/UserSettings',
            name: 'UserSettings',
            component: UserSettings
        },
        {
            path: '/SaveIngredients',
            name: 'SaveIngredients',
            component: SaveIngredients

        },
        {
            path: '/Footer',
            name: 'FooterFile',
            component: FooterFile
        }
      
    ]
  })

  export default router