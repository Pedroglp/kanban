export default class User{

    constructor(instance){
        this.instance = instance
        this.name = '/users/'
    }

    get(pk){
        this.instance.get(name+pk+'/')
    }

    list(){
        this.instance.get(name)
    }

}