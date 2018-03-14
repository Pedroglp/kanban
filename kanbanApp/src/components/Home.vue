<template>
  <div id="home">
    <newtaskform></newtaskform>
    <statusboard></statusboard>
  </div>
</template>

<script>

import statusboard from './components/Home/Statusboard.vue'
import newtaskform from './components/Home/NewTaskForm.vue'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components:{statusboard, newtaskform}
}
</script>