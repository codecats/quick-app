import Vue from 'vue'
import Hello from './Hello.vue'

require('./assets/sass/main.sass');

new Vue({
  el: '#app',
  components: { Hello }
})
