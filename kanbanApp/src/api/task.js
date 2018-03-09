export default class Task{

    constructor(instance){
        this.name='/task/'
        this.instance = instance
    }

    get(pk){
        this.instance.get(this.name+pk+'/')
    }

    list(){
        this.instance.get(this.name)
    }

    post(params){
        this.instance.post(this.name, params)
    }

    update(pk, params){
        this.instance.post(this.name+pk+'/update_status/', params)
    }

    delete(pk){
        this.instance.delete(this.name+pk+'/')
    }
}