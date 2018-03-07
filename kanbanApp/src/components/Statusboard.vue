<template>
    <div class="statusboard">
        <b-row>
            <b-col align-self="start" v-for="group in status" :key="group.id">
                <taskboard :tasks="tasks" :status="group"></taskboard>
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
                status:[{id:'1',name:'Todo'},
                        {id:'2',name:'Doing'},
                        {id:'3',name:'Done'}]
            }
        },
        computed:{
            tasks(){
                return this.$store.state.tasks;
            }
        }
    }
</script>
