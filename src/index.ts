import './assets/styles/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App);

app.use(createPinia());

app.mount("#root");