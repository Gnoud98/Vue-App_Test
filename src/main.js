import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
   faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft,faChevronRight)


createApp(App).use(router).mount('#app')
