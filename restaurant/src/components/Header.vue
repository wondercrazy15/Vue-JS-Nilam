<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add</router-link>
        <!-- <router-link to="/update">Update</router-link> -->
        <router-link to="/login">Login</router-link>
        <router-link to="/sign-up">Sign-up</router-link>
        <a v-on:click="Logout" href="#">Logout</a>
    </div>
</template>
<script>
export default {
    name:'Header',
    methods:{
        Logout(){
            console.log("Loging out..")
            localStorage.clear()
            this.$router.push({name:'Login'})
        }
    }
}
</script>
<style>
 /* rgba(148, 187, 233, 100) */
.nav{
   background: rgb(238,174,202);
background: linear-gradient(90deg, rgba(238,184,202,1) 0%, rgba(148,187,233,1) 100%);
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.nav a:hover{
    background-color: #f2f2f2;
    color: #222;
}
</style>
