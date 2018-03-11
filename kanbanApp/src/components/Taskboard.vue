<template>
    <div class="taskboard">
        <b-card :header="status.name">
            <b-row align-h="center" v-for="task in tasksFiltered" :key="task.id">
                    <taskcard :task="task"></taskcard>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import taskcard from "./Taskcard.vue"

    export default{
        name:'taskboard',
        components:{taskcard},
        props:['tasks', 'status'],
        methods:{},
        data(){
            return{
                name: status.name,
            }
        },
        computed:{
            tasksFiltered(){
                if(this.tasks)
                    return this.tasks.filter(task => task.status.id == this.status.id)
            }
        }
    }
</script>

<style>

b-card{
    height: 30vh;
}

</style>