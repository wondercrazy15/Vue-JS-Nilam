<template>
    <div>
        <h2 class="text-center">employees List</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                    <!--<th>Actions</th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{employee.id}}</td>
                    <td>{{employee.name}}</td>
                    <td>{{employee.email}}</td>
                     <td>{{employee.phone}}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name: 'edit', params: {id: employee.id}}" class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger" @click="deleteemployee(employee.id)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
       data(){
          return{employees:[]}
        },
       created(){
            this.axios.get('http://localhost:8000/api/employees/').then(response => {
                this.employees = response.data;
             });
        },
       methods:{
           deleteEmployee(id){
                this.axios.delete('http://localhost:8000/api/employees/${id}').then(response =>{
                    let i=this.employees.map(data=>data.id).indexOf(id);
                    this.employees.splice(i, 1)
                });
            }
        }
    } 
</script>