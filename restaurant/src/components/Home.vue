<template>
<Header />
<img class="logo" alt="Vue logo" src="../assets/restaurant.png">
<h3>Hello {{name}}, Welcome to Home</h3>
<h3>All Rsestaurant List</h3>

<div v-for="item in restoList" :key="item.id">
    <div class="column">
        <div class="cart">
            <img :src="item.image" class="data-img">

            <h2>{{item.name}}</h2>
            <h5>*-* Contact Info *-*</h5>
            <p>{{item.address}}</p>
            <p>{{item.contact}}</p>
            <button class="update">
                <router-link class="link" :to="'/update/'+ item.id">Update</router-link>
            </button>
            <button class="delete" v-on:click="deletedata(item.id)">Delete</button>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import swal from 'sweetalert';

// swal("Hello world!");
export default {
    name: 'Home',
    data() {
        return {
            name: '',
            restoList: []
        }
    },
    components: {
        Header
    },
    methods: {
        async deletedata(id) {
            console.log(id)
            let resto = await axios.delete('http://localhost:3000/restaurant/' + id)
            if (resto.status == 200) {
                console.log(" done!")
                const willDelete = await swal({
                    title: "Are you sure?",
                    text: "Are you sure that you want to delete this file?",
                    icon: "warning",
                    dangerMode: true,

                    showCancelButton: true,
                });

                if (willDelete) {
                    swal("Deleted!", "Your Data is Deleted.", "success");
                }
                this.loadData()

            }
        },
        async loadData() {
            let user = localStorage.getItem('User-info')
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({
                    name: 'Signup'
                })
            }
            let resto = await axios.get('http://localhost:3000/restaurant')
            console.log("Restaurant List:", resto)
            this.restoList = resto.data
        }
    },
    mounted() {

        this.loadData()
    }
}
</script>

<style scoped>
.cart {
    width: 300px;
    min-height: 250px;
    box-shadow: 0 0 5px 1px rgba(238, 184, 202, 1);
    position: relative;
    border-radius: 20px;
    transition: 2s;
    margin-left: 150px;
    /* border:1px solid rgb(248, 116, 116); */
}

.data-img {
    width: 250px !important;
    height: 150px !important;
    /* position: absolute; */
    top: 78px;
    left: 37%;
    z-index: 99999999;
    transition: 2s;
    border-radius: 10%;
    margin-top: 10%;
    /* border:1px solid rgb(248, 116, 116); */
    box-shadow: 0 0 5px 1px rgba(238, 184, 202, 1);
}

.column {
    float: left;
    width: 375px;
    margin-bottom: 16px;
    padding: 0 8px 8;
}

h2 {
    padding-block-start: 30px;
}

.update {

    background: linear-gradient(90deg, rgba(238, 184, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    padding: 5px;
    border: none;
    width: 75px;
    height: 35px;
    border-radius: 10px;

}

.delete {
    margin: 10px;
    background: linear-gradient(90deg, rgba(238, 184, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    color: white;
    border: none;
    width: 75px;
    height: 35px;
    border-radius: 10px;
    margin-right: 2px;
}

.link {
    text-decoration: none;
    color: white;
}

.update:hover {
    opacity: 0.6;
}

.delete:hover {
    opacity: 0.6;
}
</style>
