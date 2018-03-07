<template>
  <div id="app">
    <b-container>
      <newtaskform></newtaskform>
      <statusboard></statusboard>
    </b-container>
  </div>
</template>

<script>

import statusboard from './components/Statusboard.vue'
import newtaskform from './components/NewTaskForm.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{statusboard, newtaskform}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
