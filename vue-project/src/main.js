import { createApp } from 'vue'
import App from './App.vue'
import { mdi } from 'vuetify/iconsets/mdi'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



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
          tertiary: '#0F4C75',
          altColor: '#BBE1FA'
        }
      }
    }
  }
})
const app = createApp(App)

app.use(vuetify)

app.mount('#app')