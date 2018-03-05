<template>
    <div class="taskboard">
        <b-card :header="name">
            <b-row align-h="center" v-for="task in tasks">
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
        props:['tasks', 'name'],
        methods:{},
        data(){
            return{
                name: this.name,
                tasks: this.tasks
            }
        }
    }
</script>
