import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as mdb from 'mdb-ui-kit';

import Primevue from "primevue/config";
import Menubar from 'primevue/menubar';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(Primevue);
app.use(mdb)
app.use(Menubar);
app.use(router);

app.mount('#app');
