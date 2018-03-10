<template>
    <div class="newtaskform">
        <b-card style="margin-bottom:10px" header="New Task">
            <b-form inline>
                <b-form-group   id="taskNameGroup"
                                label="Name: "
                                label-for="taskNameInput"
                                style="margin-right:10px">
                    <b-form-input   id="taskNameInput"
                                    type="text"
                                    :v-model="form.taskName"
                                    place-holder="Enter Task Name"
                                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group   id="taskDescriptionGroup"
                                label="Description: "
                                label-for="taskDescription"
                                style="margin-right:10px">
                    <b-form-input   id="taskDescription"
                                    type="text"
                                    :v-model="form.taskDescription"
                                    place-holder="Tell me a little bit more about it"
                                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group   id="taskUserGroup"
                                label="User Assigned: "
                                label-for="taskUserSelect"
                                style="margin-right:10px">
                    <b-form-select  id="taskUserSelect"
                                    :options="userOptions"
                                    required>
                    </b-form-select>
                </b-form-group>
                <b-button type="button" v-on:click="addTask" variant="primary">Create</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
    export default{
        name:'newtaskform',
        components:{},
        //props:['users'],
        methods:{
            addTask(){
                 var pretask = {};
                 pretask.name = this.form.name;
                 pretask.description = this.form.description;
                 pretask.owner = {id:"1", name:"Pedro"};
                 pretask.status = {id:"1", name:"Todo"};
                 pretask.assignedUser = {id:"1", name:"Pedro"}
                 this.$store.dispatch('addTask', pretask)
            },
        },
        data(){
            return{
                form:{
                    name:'Tarefa',
                    description:'Teste',
                    user:null
                },
                userOptions:[]
            }
        },
        computed:{
            updateUserList: function(){
                for(let user of this.$store.state.usersList){
                    this.userOptions.push({text: user.first_name, value:user});
                }
            }
        },
        mounted(){
            this.$store.dispatch('getUsersList')
        }
    }
</script>
