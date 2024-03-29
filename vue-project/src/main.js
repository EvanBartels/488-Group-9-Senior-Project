
import { createApp } from 'vue'
import App from './App.vue'
import { mdi } from 'vuetify/iconsets/mdi'
import router from './router'
import Axios from 'axios'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

//Firebase
import store from './store'
//const firebase = require('./firebaseConfig.js')

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Check if the app running on localhost
// //if (window.location.hostname === 'localhost') {
//   Axios.defaults.baseURL = 'http://localhost:5019/' // Change with https://cscd490seniorprojectwebapp.azurewebsites.net/ if needed
// } else {
  Axios.defaults.baseURL = 'https://cscd490seniorprojectwebapp.azurewebsites.net/'
//}

// Provide the useDisplay to other components so that it can be used in testing.

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#1B262C',
          secondary: '#0F4C75',
          tertiary: '#3282B8',
          altColor: '#BBE1FA'
        }
      }
    }
  },
  defaults: {
    VBtn: {
      color: 'tertiary',
      variant: 'outlined',
      elevation: 10,
    },
  },
})
const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(store)
app.mount('#app')

//AddItem Function
/*function addItem() {
  const itemList = document.getElementById("itemList");
  const newItem = document.createElement("href");
  newItem.textContent = "New Item";
  itemList.appendChild(newItem);
}


//RemoveItem Function
function removeItem() {
  const itemLists = document.getElementById("item-lists");
  if(itemLists.children.length > 0) {
    itemLists.removeChild(itemLists.lastChild);
  }
}*/