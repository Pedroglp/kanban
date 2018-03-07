import Vue from 'vue'
import user from './users'
import task from './task' 
import status from './status'

Vue.use(Axios)

class api{
    constructor(token, url = 'http://127.0.0.1:8080/api'){
        this.instance = axios.create({
           baseURL: url,
           timeout:1000,
           headers:{'Authentication':'Token '+token} 
        });
    }

    user(){
        return new user(this.instance);
    }

    task(){
        return new task(this.instance);
    }

    status(){
        return new status(this.instance);
    }
}

export default {api}