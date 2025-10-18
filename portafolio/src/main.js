import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/myroutes'

// componentes base para Fonts-Awesome
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// importamos lo estilos
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

// añadimos los iconos importados a la libreria
library.add(faLinkedin, faInstagram, faGithub)

createApp(App)
// registramos el componente global
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
