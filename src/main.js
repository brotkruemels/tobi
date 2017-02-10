import Vue from 'vue'
import App from './App.vue'
import vueScrollTo from 'vue-scrollTo'
import Scrollspy from 'vue2-scrollspy'

Vue.use(Scrollspy);
Vue.use(vueScrollTo, { offset: '60px' });

Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  el: '#app',
  render: h => h(App),
  //  data: {
  //        showModal: false
  //    }
})
