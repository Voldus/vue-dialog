import Vue from 'vue';
import App from './Test/App.vue';

// plugin init!!!
import Dlg from '../src/plugin';

Vue.use(Dlg);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
