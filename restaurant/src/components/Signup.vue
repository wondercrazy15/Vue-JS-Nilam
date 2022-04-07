<template>
<img class="logo" alt="Vue logo" src="../assets/restaurant.png">
<h1>Sign-Up </h1>
<div class="register">
    <input type="text" name="name" v-model="name" placeholder="Your Name">
    <input type="text" name="email" v-model="email" placeholder="Your Email">
    <input type="text" name="pwd" v-model="password" placeholder="Your Password">
    <button v-on:click="signUp">Sign Up</button>

    <p> if you are already register please login from here 
      <router-link to="/login">Login</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Sign-Up',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
       async signUp() {
            console.log("register click..", this.name, this.email, this.password)
            let result =await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log("POST Result:",result)
            if(result.status==201){
              console.log("Signup done!")
              localStorage.setItem("User-info",JSON.stringify(result.data))
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

<style>

</style>