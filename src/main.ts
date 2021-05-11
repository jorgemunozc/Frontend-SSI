import { createApp  } from 'vue'
import App from './App.vue'

import router from "./router";
import PrimeVue from "primevue/config";
import Dropdown from 'primevue/dropdown';

import { initAxios } from '@/services/ApiService';

import '../semantic/dist/semantic.min.css';

const app = createApp(App);

initAxios();
app.use(router);
app.use(PrimeVue);
app.component('Dropdown', Dropdown);
app.mount('#app');
