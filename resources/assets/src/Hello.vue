<template>
  <div class="container">
    <div class="notification">
      Feel the power of the future <strong>{{ counter }}</strong>
      <br>
      Some tools:
<a class="button is-primary" @click="counter++">👍</a>
<a class="button is-info" @click="counter*=2"><i class="fa fa-handshake-o" aria-hidden="true"></i></a>
<a class="button is-success" @click="counter += 100"><i class="fa fa-fighter-jet" aria-hidden="true"></i></a>
<a class="button is-warning" style="color: white" @click="counter *= counter"><i class="fa fa-bolt" aria-hidden="true"></i></a>
<a class="button is-danger" @click="alarm()">Cool!</a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0
    }
  },
  methods: {
    alarm () {alert(this.counter);}
  }
}
</script>

<style lang="scss">

</style>
