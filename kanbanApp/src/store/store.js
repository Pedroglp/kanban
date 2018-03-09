import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api.js'

Vue.use(Vuex) 

const request = new Api(`0d7c95ebacbf5c2df0d627a498c54191075d166f`);

const store = new Vuex.Store({
  state: {
    tasks: [
        {id:'1', name:"teste 1", owner:{name:"Pedro"}, status:{id:'1', name:'Todo'}, description:"Teste Desc"},
        {id:'2', name:"teste 2", owner:{name:"Pedro"}, status:{id:'2', name:'Todo'}, description:"Teste Desc"},
        {id:'3', name:"teste 3", owner:{name:"Pedro"}, status:{id:'2', name:'Doing'}, description:"Teste Desc"},
        {id:'4', name:"teste 4", owner:{name:"Pedro"}, status:{id:'3', name:'Done'}, description:"Teste Desc"}
    ],
    userList: [],
    statusList: [],
  },
  mutations: {
    'ADD_TASK': function (state, task) {
      state.tasks.push(task)
    },
    'UPDATE_TASK': function (state, taskId, status) {
      targetTask = state.tasks.filter(task=> task.id == taskId);
      targetTask.status = status;
    },
    'GET_TASKS': function (state, task){
      state.tasks.push(task)
    },
    'GET_USERS_LIST': function (state, userList){
      state.userList = statusList;
    },
    'GET_STATUS_LIST': function (state, statusList){
      state.statusList = statusList;
    },
    'API_FAIL': function (state, error){
      console.error(error);
    }
  },
  actions: {
    addTask (store, task) {
      request.task().post(task).then(response =>{
        store.commit('ADD_TASK', task);
      }).catch(error => store.commit('API_FAIL', error));
    },
    updateTask (store, taskId, status) {
      request.task().update().then(response =>{
        store.commit('CLEAR_TODOS', taskId, status);
      }).catch(error => store.commit('API_FAIL', error));
    },
    getTasks(store){
      request.task().list().then(response =>{
        store.commit('GET_TASKS');
      }).catch(error => store.commit('API_FAIL', error));
    },
    getUsers(store){
      return request.user().list().the(response =>{
        store.commit('GET_USERS', response);
      }).catch(error => store.commit('API_FAIL', error));
    },
    getStatus(store){
      return request.status().list().then(response => {
        store.commit('GET_STATUS', response);
      }).catch(error => store.commit('API_FAIL', error));
    }
  }
})

export default store