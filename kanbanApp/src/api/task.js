export default class Task{

    constructor(instance){
        this.name='/task/'
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

    update(pk, params){
        return this.instance.patch(this.name+pk+'/', {statusId:params})
    }

    delete(pk){
        return this.instance.delete(this.name+pk+'/')
    }
}