<template>
<h1>Fetch API Data</h1>
<!-- <h3>Khushi-API Data</h3>
<div id="center-screen">
    
    <table>
        <tr>
            <td>Sr. No</td>
            <td>User Name</td>
            <td>User email</td>
            <td>User Password</td>
        </tr>
        <tr v-for="item in K_list" :key="item">
            <td>{{item.id}}</td>
            <td>{{item.username}}</td>
            <td>{{item.pwd}}</td>
        </tr>
    </table>
</div>-->
<h3>Aishvarya-API Data</h3>
<div id="center-screen"> 
<table>
        <tr>
            <td>Sr. No</td>
            <td>Employee Name</td>
            <td>Employee email</td>
            <td>Employee Address</td>
            <td>Employee image</td>
        </tr>
        <tr v-for="item in A_list" :key="item">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.address}}</td>
            <td> <img :src="item.image"></td>
        </tr>
    </table>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            // K_list: [],
            A_list: []

        }
    },
    async mounted() {
        // let result = await axios.get("http://dummy.restapiexample.com/api/v1/employees")
        // console.warn('API Data:', result.data.data);
        // this.list = result.data.data;
// let result_k = await axios.get("http://192.168.1.126:8000/api/data")
// console.warn('API Data-K:', result_k.data);
// this.K_list = result_k.data

// let result_A = await axios.get("http://192.168.1.185:8000/api/list")
// console.warn('API Data-A:', result_A.data);
// this.A_list = result_A.data
let result_A = await axios.get("http://192.168.1.185:8000/api/list")
console.warn('API Data-A:', result_A.data);
this.A_list = result_A.data

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
   
}

table,
th,
td {
    border: 1px solid black;
}

th,td {
    padding: 15px;
    text-align: left;
}
#center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 40vh;
}
</style>
