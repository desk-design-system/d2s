import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import {useNotification} from "./components/notification"

const app = createApp(App)
app.provide('$notification', useNotification())
app.config.globalProperties.$notification = useNotification()
app.mount('#app');
