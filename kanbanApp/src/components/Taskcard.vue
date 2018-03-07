<template>
    <div class="taskcard">
        <b-card :title="task.name" style="margin-bottom:10px">
            <p class="card-text">{{task.description}}</p>
            <b-button href="#" variant="primary">Start</b-button>
            <b-button href="#" variant="primary">End</b-button>
            <b-button href="#" variant="primary">Restart</b-button>
        </b-card>
    </div>
</template>

<script>
    export default{
        name:'taskcard',
        components:{},
        props:['task'],
        methods:{
            startTask(){alert('Task Started');},
            finishTask(){alert('Task Finished');},
            restartTask(){alert('Task Restarted')}
        }
    }
</script>
