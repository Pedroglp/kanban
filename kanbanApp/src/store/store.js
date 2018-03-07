import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

const store = new Vuex.Store({
  state: {
    tasks: [
        {id:'1', name:"teste 1", owner:{name:"Pedro"}, status:{id:'1', name:'Todo'}, description:"Teste Desc"},
        {id:'2', name:"teste 2", owner:{name:"Pedro"}, status:{id:'2', name:'Todo'}, description:"Teste Desc"},
        {id:'3', name:"teste 3", owner:{name:"Pedro"}, status:{id:'2', name:'Doing'}, description:"Teste Desc"},
        {id:'4', name:"teste 4", owner:{name:"Pedro"}, status:{id:'3', name:'Done'}, description:"Teste Desc"}
    ]
  },
  mutations: {
    'ADD_TASK': function (task) {
      state.tasks.push(todo)
    },
    'UPDATE_TASK': function (taskId, status) {
      targetTask = state.tasks.filter(task=> task.id == taskId);
      targetTask.status = status;
    },
  },
  actions: {
    addTask (store, task) {
      store.commit('ADD_TASK', task)
    },
    updateTask (store, taskId, status) {
      store.commit('CLEAR_TODOS', taskId, status)
    }
  }
})

export default store