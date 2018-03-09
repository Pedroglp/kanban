import Vue from 'vue'
import User from './user.js'
import Task from './task.js' 
import Status from './status.js'
import axios from 'axios'

Vue.use(axios)

export default class Api{
    constructor(token, url = 'http://127.0.0.1:8080/api'){
        this.instance = axios.create({
           baseURL: url,
           timeout:1000,
           headers:{'Authorization':'Token '+token}}
        );
    }

    user(){
        return new User(this.instance);
    }

    task(){
        return new Task(this.instance);
    }

    status(){
        return new Status(this.instance);
    }
}