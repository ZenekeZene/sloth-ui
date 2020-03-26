import Vue from 'vue';
import Sticky from 'vue-sticky-directive';
import VueScrollTo from 'vue-scrollto';
import VueScrollactive from 'vue-scrollactive';
import Subtitle from '@/components/layout/Subtitle';
import App from './App.vue';
import router from './router';

// Library styles:
import '../lib/styles/main.scss';

// Documentation styles:
import './assets/styles/main.scss';

Vue.use(VueScrollTo);
// Vue.use(vueSmoothScroll);
Vue.use(VueScrollactive);
Vue.component('subtitle-anchor', Subtitle);

Vue.config.productionTip = false;

Vue.use(Sticky);

new Vue({
  router,
  render: (h) => h(App),
  components: {
    Subtitle,
  },
}).$mount('#app');
