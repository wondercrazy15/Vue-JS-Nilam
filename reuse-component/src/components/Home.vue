<template>
<h1>Reuse component with child component</h1>

    <div class="user-data" v-for="item in Users" :key="item.name">
        <Child :data="item" :getData="getData" :getUser="getUserData"/>
        <h2>{{childName}}</h2>
    </div>


</template>

<script>
import Child from './child.vue'
export default {
    name: 'Home',
    components: {
        Child
    },
    data() {
        return {
          childName:"",
            Users: [{
                    name: 'Nil',
                    email: 'nil@gmail.com'
                },
                {
                    name: 'Mahii',
                    email: 'mahii@gmail.com'
                },
                {
                    name: 'Aadi',
                    email: 'adi@gmail.com'
                },
                {
                    name: 'Remo',
                    email: 'reno@gmail.com'
                },
                {
                    name: 'Shreyaa',
                    email: 'shrey@gmail.com'
                }
            ]
        }
    },
    methods:{
      getData(name){
        alert(name)
      },
      getUserData(name){
this.childName=name
      }
    }
}
</script>

<style>
.user-data{
  background-color: lightskyblue;
    padding: 10px;
    border-bottom: 1px solid;
    margin-right: 250px;
    margin-left: 250px;
    margin-bottom: 10px;
    /* margin: 20px; */
}
</style>
