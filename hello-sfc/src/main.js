import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from 'vuetify'
import axios from "axios";

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vue = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");