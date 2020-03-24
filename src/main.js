import Vue from 'vue';
import Sticky from 'vue-sticky-directive';
import App from './App.vue';
import router from './router';

import '../lib/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(Sticky);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
