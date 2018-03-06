<template>
    <div class="statusboard">
        <b-row>
            <b-col v-self="center" v-for="group in taskGroup" :key="group.id">
                <taskboard :tasks="group.tasks" :name="group.name"></taskboard>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import taskboard from "./Taskboard.vue"

    export default{
        name:'statusboard',
        components:{taskboard},
        methods:{
            filterTasks(){alert('Filtered');},
        },
        data(){
            return{
                taskGroup: this.taskGroup
            }
        },
        mounted(){
            this.taskGroup = [
                {id:'1',name:'Todo', tasks:[
                                    {id:'1', name:"teste 1", owner:{name:"Pedro"}},
                                    {id:'2', name:"teste 2", owner:{name:"Nina"}}]

                },
                {id:'1',name:'Doing', tasks:[
                                    {id:'3', name:"teste 3", owner:{name:"Pedro"}},
                                    {id:'4', name:"teste 4", owner:{name:"Nina"}}]

                },
                {id:'1',name:'Doing', tasks:[
                                    {id:'5', name:"teste 5", owner:{name:"Pedro"}},
                                    {id:'6', name:"teste 6", owner:{name:"Nina"}}]

                }]
        }
    }
</script>
