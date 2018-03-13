import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex) 

const request = new Api(`0d7c95ebacbf5c2df0d627a498c54191075d166f`);

const store = new Vuex.Store({
  state: {
    tasks: [],
    usersList: [],
    statusList: [],
    auth:{isLoggedIn: false, token:'', user:{}},
  },
  mutations: {
    'ADD_TASK': function (state, task) {
      state.tasks.push(task)
    },
    'UPDATE_TASK': function (state, task, status) {
      targetTask = state.tasks.filter(task=> task.id == taskId);
      targetTask.status = status;
    },
    'GET_TASKS': function (state, tasks){
      state.tasks = tasks
    },
    'GET_USERS_LIST': function (state, userList){
      state.usersList = userList;
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
      let params = {'name':task.name,'description':task.description,'assignedUser':task.assignedUser.id}
      return request.task().post(params).then(response =>{
        store.commit('ADD_TASK', response.data.result);
      }).catch(error => store.commit('API_FAIL', error));
    },
    updateTask (store, task) {
      return request.task().update(task.id, task.status.id).then(response =>{
        store.commit('UPDATE_TASK', response.result);
      }).catch(error => store.commit('API_FAIL', error));
    },
    getTasks(store){
      return request.task().list().then(response =>{
        store.commit('GET_TASKS', response.data.result);
      }).catch(error => store.commit('API_FAIL', error));
    },
    getUsersList(store){
      return request.user().list().then(response =>{
        store.commit('GET_USERS_LIST', response.data);
      }).catch(error => store.commit('API_FAIL', error));
    },
    getStatusList(store){
      return request.status().list().then(response => {
        store.commit('GET_STATUS', response.data.result);
      }).catch(error => store.commit('API_FAIL', error));
    }
  },
  plugins:[createPersistedState()]
})

export default store