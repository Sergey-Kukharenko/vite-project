import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/css/style.css';
import { Vue3Mq } from 'vue3-mq';

import App from './App.vue';

createApp(App)
  .use(createPinia())
  .use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  })
  .mount('#app');
