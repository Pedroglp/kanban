import Vue from 'vue'
import user from './users'
import task from './task' 

Vue.use(Axios)

class api{
    constructor(token){
        this.token = token
    }

    user(){
        return user(this.token)
    }

    task(){
        return task(this.token)
    }

}

export default {api}