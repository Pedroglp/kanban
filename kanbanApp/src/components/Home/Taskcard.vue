<template>
    <div class="taskcard">
            <b-card :title="task.name" style="margin-bottom:10px">
            <p class="card-text">{{task.description}}</p>
            <b-button v-on:click="startTask" variant="primary">Start</b-button>
            <b-button v-on:click="finishTask" variant="primary">End</b-button>
            <b-button v-on:click="restartTask"variant="primary">Restart</b-button>
        </b-card>     
    </div>
</template>

<script>
    export default{
        name:'taskcard',
        components:{},
        props:['task'],
        methods:{
            startTask(){
                this.task.status = {id:'2', name:'Doing'}
                this.$store.dispatch('updateTask', this.task)},
            finishTask(){
                this.task.status = {id:'3', name:'Done'}
                this.$store.dispatch('updateTask', this.task)},
            restartTask(){
                this.task.status = {id:'1', name:'Todo'}
                this.$store.dispatch('updateTask', this.task)}
        }
    }
</script>
