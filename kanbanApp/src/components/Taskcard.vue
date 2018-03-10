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
        computed:{
            setTask(){this.task = task}
        },
        methods:{
            startTask(){this.$store.dispatch('updateTask'), this.task, {id:'2', name:'Doing'}},
            finishTask(){this.$store.dispatch('updateTask'), this.task, {id:'3', name:'Done'}},
            restartTask(){this.$store.disptach('updateTask'), this.task, {id:'1', name:'Todo'}}
        }
    }
</script>
