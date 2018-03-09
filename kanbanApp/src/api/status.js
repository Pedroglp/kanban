export default class Status{

    constructor(instance){
        this.name='/status/'
        this.instance = instance
    }

    get(pk){
        return this.instance.get(this.name+pk+'/')
    }

    list(){
        return this.instance.get(this.name)
    }

    post(params){
        return this.instance.post(this.name, params)
    }

}
