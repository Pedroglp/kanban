export default class User{

    constructor(instance){
        this.instance = instance
        this.name = '/users/'
    }

    get(pk){
        return this.instance.get(this.name+pk+'/')
    }

    list(){
        return this.instance.get(this.name)
    }

}