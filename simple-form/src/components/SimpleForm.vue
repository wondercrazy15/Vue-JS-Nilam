<template>
    <h1>Simple Form with empty field validation</h1>
    
        <p v-for="item in error" :key="item">
            {{item}} is empty
        </p>
  
    <form>
        <label>Name: </label>
        <input type="text" placeholder="Enter Name" v-model="form.name"><br/>
        <br/><label>E-mail: </label>
        <input type="email" placeholder="Enter Email" v-model="form.email"><br/>
        <br/><label>Phone: </label>
        <input type="tel" placeholder="Enter contact No" v-model="form.phone"><br/>
         <br/><label>Country: </label>
        <select v-model="form.country">
            <option hidden>Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>Belgium</option>
            <option>Spain</option>
            <option>Chaina</option>
        </select><br/>
        <br/><lable>Gender:</lable>
        <input type="radio" value="male" name="gender" v-model="form.gender">Male
        <input type="radio" value="female" name="gender" v-model="form.gender">Female<br/><br/>
        <label>Technology: </label>
       
        <input type="checkbox" value="php" v-model="form.technology">
         <lable>PHP </lable>
        
        <input type="checkbox" value=".net" v-model="form.technology">
        <lable>.Net </lable>
       
        <input type="checkbox" value="Vue js" v-model="form.technology">
         <lable>Vue js </lable><br/><br/>
       
        <button type="button" v-on:click="getData">Register</button>
    </form>

<br/><br/><br/>



    <h1>Form Modifiers</h1>
    <p>-----lazy----</p>
    <input type="text" v-model.lazy="data1">
    <h5>Data is: {{data1}}</h5>
    <p>-----number----</p>
    <input type="number" v-model.number="data2">
   <h5>Data is: {{data2}}</h5>
     <p>-----trim----</p>
    <input type="text" v-model.trim="data3">
    <h5>Data is: {{data3}}</h5>
<br/><br/><br/>



    <h2>props & Non-props Data</h2>
    <Home data="props data" id="name"/>
</template>
<script>
import Home from './HelloWorld.vue'
export default {
    name:'SimpleForm',
    components:{
        Home
    },
    data(){
        return{
            form: {
                name:'',
                email:'',
                phone:'',
                country:'',
                gender:'',
                technology:[]     
            },
            error:[],
            data1:'',
            data2:'',
            data3:''
        }
    },
    methods:{
        getData(){
            this.error=[]
            for(const item in this.form){
                if(this.form[item]==="" || this.form[item].length===0){
                    this.error.push(item)
                }
            }
            if(this.error.length===0){
                alert("data inserted...")
            }
            console.log('Form data:',this.form,this.error)
        }
    }
}
</script>
<style scoped>
/* p{
    color: red;
} */
</style>