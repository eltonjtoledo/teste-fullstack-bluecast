import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Buefy)
new Vue({
  Vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
