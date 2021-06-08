import { createApp } from 'vue'
import App from './App.vue'

import installAll from './component';

const app = createApp(App);

installAll(app);

app.mount('#app');
