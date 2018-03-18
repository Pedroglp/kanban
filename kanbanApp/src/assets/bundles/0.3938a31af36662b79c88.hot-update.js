webpackHotUpdate(0,{

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(244);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api_js__ = __webpack_require__(245);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\nconst request = new __WEBPACK_IMPORTED_MODULE_2__api_api_js__[\"a\" /* default */](`0d7c95ebacbf5c2df0d627a498c54191075d166f`);\n\nconst store = new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n  state: {\n    tasks: [],\n    usersList: [],\n    statusList: []\n  },\n  mutations: {\n    'ADD_TASK': function (state, task) {\n      state.tasks.push(task);\n    },\n    'UPDATE_TASK': function (state, task, status) {\n      targetTask = state.tasks.filter(task => task.id == taskId);\n      targetTask.status = status;\n    },\n    'GET_TASKS': function (state, tasks) {\n      state.tasks = tasks;\n    },\n    'GET_USERS_LIST': function (state, userList) {\n      state.usersList = userList;\n    },\n    'GET_STATUS_LIST': function (state, statusList) {\n      state.statusList = statusList;\n    },\n    'API_FAIL': function (state, error) {\n      console.error(error);\n    }\n  },\n  actions: {\n    addTask(store, task) {\n      let params = { 'name': task.name, 'description': task.description, 'assignedUser': task.assignedUser.id };\n      return request.task().post(params).then(response => {\n        store.commit('ADD_TASK', response.data.result);\n      }).catch(error => store.commit('API_FAIL', error));\n    },\n    updateTask(store, task) {\n      return request.task().update(task.id, task.status.id).then(response => {\n        store.commit('UPDATE_TASK', response.result);\n      }).catch(error => store.commit('API_FAIL', error));\n    },\n    getTasks(store) {\n      return request.task().list().then(response => {\n        store.commit('GET_TASKS', response.data.result);\n      }).catch(error => store.commit('API_FAIL', error));\n    },\n    getUsersList(store) {\n      return request.user().list().then(response => {\n        store.commit('GET_USERS_LIST', response.data);\n      }).catch(error => store.commit('API_FAIL', error));\n    },\n    getStatusList(store) {\n      return request.status().list().then(response => {\n        store.commit('GET_STATUS', response.data.result);\n      }).catch(error => store.commit('API_FAIL', error));\n    }\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (store);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanM/YzJkMSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJyZXF1ZXN0Iiwic3RvcmUiLCJWdWV4IiwiU3RvcmUiLCJzdGF0ZSIsInRhc2tzIiwidXNlcnNMaXN0Iiwic3RhdHVzTGlzdCIsIm11dGF0aW9ucyIsInRhc2siLCJwdXNoIiwic3RhdHVzIiwidGFyZ2V0VGFzayIsImZpbHRlciIsImlkIiwidGFza0lkIiwidXNlckxpc3QiLCJlcnJvciIsImNvbnNvbGUiLCJhY3Rpb25zIiwiYWRkVGFzayIsInBhcmFtcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImFzc2lnbmVkVXNlciIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb21taXQiLCJkYXRhIiwicmVzdWx0IiwiY2F0Y2giLCJ1cGRhdGVUYXNrIiwidXBkYXRlIiwiZ2V0VGFza3MiLCJsaXN0IiwiZ2V0VXNlcnNMaXN0IiwidXNlciIsImdldFN0YXR1c0xpc3QiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBQUEsQ0FBSUMsR0FBSixDQUFRLHFEQUFSOztBQUVBLE1BQU1DLFVBQVUsSUFBSSw0REFBSixDQUFTLDBDQUFULENBQWhCOztBQUVBLE1BQU1DLFFBQVEsSUFBSSxxREFBQUMsQ0FBS0MsS0FBVCxDQUFlO0FBQzNCQyxTQUFPO0FBQ0xDLFdBQU8sRUFERjtBQUVMQyxlQUFXLEVBRk47QUFHTEMsZ0JBQVk7QUFIUCxHQURvQjtBQU0zQkMsYUFBVztBQUNULGdCQUFZLFVBQVVKLEtBQVYsRUFBaUJLLElBQWpCLEVBQXVCO0FBQ2pDTCxZQUFNQyxLQUFOLENBQVlLLElBQVosQ0FBaUJELElBQWpCO0FBQ0QsS0FIUTtBQUlULG1CQUFlLFVBQVVMLEtBQVYsRUFBaUJLLElBQWpCLEVBQXVCRSxNQUF2QixFQUErQjtBQUM1Q0MsbUJBQWFSLE1BQU1DLEtBQU4sQ0FBWVEsTUFBWixDQUFtQkosUUFBT0EsS0FBS0ssRUFB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IjI0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcbmltcG9ydCBBcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcblxuVnVlLnVzZShWdWV4KSBcblxuY29uc3QgcmVxdWVzdCA9IG5ldyBBcGkoYDBkN2M5NWViYWNiZjVjMmRmMGQ2MjdhNDk4YzU0MTkxMDc1ZDE2NmZgKTtcblxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG4gIHN0YXRlOiB7XG4gICAgdGFza3M6IFtdLFxuICAgIHVzZXJzTGlzdDogW10sXG4gICAgc3RhdHVzTGlzdDogW10sXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgICdBRERfVEFTSyc6IGZ1bmN0aW9uIChzdGF0ZSwgdGFzaykge1xuICAgICAgc3RhdGUudGFza3MucHVzaCh0YXNrKVxuICAgIH0sXG4gICAgJ1VQREFURV9UQVNLJzogZnVuY3Rpb24gKHN0YXRlLCB0YXNrLCBzdGF0dXMpIHtcbiAgICAgIHRhcmdldFRhc2sgPSBzdGF0ZS50YXNrcy5maWx0ZXIodGFzaz0+IHRhc2suaWQgPT0gdGFza0lkKTtcbiAgICAgIHRhcmdldFRhc2suc3RhdHVzID0gc3RhdHVzO1xuICAgIH0sXG4gICAgJ0dFVF9UQVNLUyc6IGZ1bmN0aW9uIChzdGF0ZSwgdGFza3Mpe1xuICAgICAgc3RhdGUudGFza3MgPSB0YXNrc1xuICAgIH0sXG4gICAgJ0dFVF9VU0VSU19MSVNUJzogZnVuY3Rpb24gKHN0YXRlLCB1c2VyTGlzdCl7XG4gICAgICBzdGF0ZS51c2Vyc0xpc3QgPSB1c2VyTGlzdDtcbiAgICB9LFxuICAgICdHRVRfU1RBVFVTX0xJU1QnOiBmdW5jdGlvbiAoc3RhdGUsIHN0YXR1c0xpc3Qpe1xuICAgICAgc3RhdGUuc3RhdHVzTGlzdCA9IHN0YXR1c0xpc3Q7XG4gICAgfSxcbiAgICAnQVBJX0ZBSUwnOiBmdW5jdGlvbiAoc3RhdGUsIGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGFkZFRhc2sgKHN0b3JlLCB0YXNrKSB7XG4gICAgICBsZXQgcGFyYW1zID0geyduYW1lJzp0YXNrLm5hbWUsJ2Rlc2NyaXB0aW9uJzp0YXNrLmRlc2NyaXB0aW9uLCdhc3NpZ25lZFVzZXInOnRhc2suYXNzaWduZWRVc2VyLmlkfVxuICAgICAgcmV0dXJuIHJlcXVlc3QudGFzaygpLnBvc3QocGFyYW1zKS50aGVuKHJlc3BvbnNlID0+e1xuICAgICAgICBzdG9yZS5jb21taXQoJ0FERF9UQVNLJywgcmVzcG9uc2UuZGF0YS5yZXN1bHQpO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gc3RvcmUuY29tbWl0KCdBUElfRkFJTCcsIGVycm9yKSk7XG4gICAgfSxcbiAgICB1cGRhdGVUYXNrIChzdG9yZSwgdGFzaykge1xuICAgICAgcmV0dXJuIHJlcXVlc3QudGFzaygpLnVwZGF0ZSh0YXNrLmlkLCB0YXNrLnN0YXR1cy5pZCkudGhlbihyZXNwb25zZSA9PntcbiAgICAgICAgc3RvcmUuY29tbWl0KCdVUERBVEVfVEFTSycsIHJlc3BvbnNlLnJlc3VsdCk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiBzdG9yZS5jb21taXQoJ0FQSV9GQUlMJywgZXJyb3IpKTtcbiAgICB9LFxuICAgIGdldFRhc2tzKHN0b3JlKXtcbiAgICAgIHJldHVybiByZXF1ZXN0LnRhc2soKS5saXN0KCkudGhlbihyZXNwb25zZSA9PntcbiAgICAgICAgc3RvcmUuY29tbWl0KCdHRVRfVEFTS1MnLCByZXNwb25zZS5kYXRhLnJlc3VsdCk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiBzdG9yZS5jb21taXQoJ0FQSV9GQUlMJywgZXJyb3IpKTtcbiAgICB9LFxuICAgIGdldFVzZXJzTGlzdChzdG9yZSl7XG4gICAgICByZXR1cm4gcmVxdWVzdC51c2VyKCkubGlzdCgpLnRoZW4ocmVzcG9uc2UgPT57XG4gICAgICAgIHN0b3JlLmNvbW1pdCgnR0VUX1VTRVJTX0xJU1QnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHN0b3JlLmNvbW1pdCgnQVBJX0ZBSUwnLCBlcnJvcikpO1xuICAgIH0sXG4gICAgZ2V0U3RhdHVzTGlzdChzdG9yZSl7XG4gICAgICByZXR1cm4gcmVxdWVzdC5zdGF0dXMoKS5saXN0KCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHN0b3JlLmNvbW1pdCgnR0VUX1NUQVRVUycsIHJlc3BvbnNlLmRhdGEucmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHN0b3JlLmNvbW1pdCgnQVBJX0ZBSUwnLCBlcnJvcikpO1xuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvc3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///243\n");

/***/ })

})