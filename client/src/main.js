import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes';
import Layout from './layouts/Layout.vue';
import 'vuetify/dist/vuetify.min.css';
import FlashMessage from '@smartweb/vue-flash-message';

// Vue config
Vue.use(Vuetify);
Vue.use(FlashMessage);

// Main component
new Vue({
  el: '#app',
  vuetify: new Vuetify({}),
  router: Routes,
  render: h => h(Layout)
});