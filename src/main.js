import Vue from 'vue';
import Sticky from 'vue-sticky-directive';
import vueSmoothScroll from 'vue2-smooth-scroll';
import VueScrollactive from 'vue-scrollactive';
import Subtitle from '@/components/layout/Subtitle.vue';
import App from './App.vue';
import router from './router';


import '../lib/styles/main.scss';

Vue.use(vueSmoothScroll);
Vue.use(VueScrollactive);
Vue.component('Subtitle', Subtitle);

Vue.config.productionTip = false;

Vue.use(Sticky);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
