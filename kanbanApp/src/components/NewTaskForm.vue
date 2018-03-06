<template>
    <div class="newtaskform">
        <b-card style="margin-bottom:10px" header="New Task">
            <b-form inline @submit="newTask">
                <b-form-group   id="taskNameGroup"
                                label="Name: "
                                label-for="taskNameInput"
                                style="margin-right:10px">
                    <b-form-input   id="taskNameInput"
                                    type="text"
                                    v-model="form.taskName"
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
                                    v-model="form.taskDescription"
                                    place-holder="Tell me a little bit more about it"
                                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group   id="taskUserGroup"
                                label="User Assigned: "
                                label-for="taskUserSelect"
                                style="margin-right:10px">
                    <b-form-select  id="taskUserSelect"
                                    :options="users"
                                    required>
                    </b-form-select>
                </b-form-group>
                <b-button type="submit" variant="primary">Create</b-button>
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
            newTask(){alert('New Task');}
        },
        data(){
            return{
                form:{
                    name:'',
                    description:'',
                    user:null
                },
                users:['Teste','Teste 2']
            }
        }
    }
</script>