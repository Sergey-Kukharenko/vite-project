import { createApp } from 'vue';
import { Vue3Mq } from 'vue3-mq';

import './assets/css/reset.css';
import './assets/css/normalize.css';
import './style.css';

import App from './App.vue';

createApp(App)
  .use(Vue3Mq, {
    breakpoints: {
      mobile: 0,
      tablet: 768,
      desktop: 1280
    }
  })
  .mount('#app');
