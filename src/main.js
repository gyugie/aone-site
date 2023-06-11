import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios';
import './index.css'
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';


// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://blog-api.test/api/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Accept'] = 'application/json';
createApp(App)
.use(store)
.use(router)
.use(VueSweetalert2)
.mount('#app')
