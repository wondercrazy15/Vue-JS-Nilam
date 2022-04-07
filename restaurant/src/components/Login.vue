<template>
    <img class="logo" alt="Vue logo" src="../assets/restaurant.png">
    <div class="login">
    <input type="text" name="email" v-model="email" placeholder="Your Email">
    <input type="password" name="pwd" v-model="password" placeholder="Your Password">
    <button v-on:click="login">Login</button>

    <p> if you are not register please register from here 
      <router-link to="/sign-up">Sign-Up</router-link>
    </p>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async login(){
           
            let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
         console.log('Login..',result)
          if(result.status==200 && result.data.length>0){
              console.log("Match done!")
              localStorage.setItem("User-info",JSON.stringify(result.data[0]))
              this.$router.push({name:'Home'})
            }
        }
    },
        mounted(){
      let user=localStorage.getItem('User-info')
      if(user){
         this.$router.push({name:'Home'})
      }
    }
}
</script>