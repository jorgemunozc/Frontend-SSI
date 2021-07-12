import { createApp  } from 'vue'
import App from './App.vue'

import router from "./router";

import PrimeVue from "primevue/config";
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

import { initAxios } from '@/services/ApiService';

// import '../semantic/dist/semantic.min.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import './index.css';

const app = createApp(App);

initAxios();
app.use(router);
app.use(PrimeVue, {
    locale: {
        emptyMessage: 'Sin opciones',
        emptyFilterMessag: 'Sin resultados'
    }
        
});
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.mount('#app');
