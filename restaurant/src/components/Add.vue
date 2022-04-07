<template>
<Header />
<img class="logo" alt="Vue logo" src="../assets/restaurant.png">
<h3>Add New Restaurant </h3>

<form class="form">
    <input type="text" name="name" placeholder="Restaurant Name" v-model="name">
    <input type="text" name="address" placeholder="Restaurant Address" v-model="address">
    <input type="text" name="contact" placeholder="Restaurant Contact" v-model="contact">
    <div v-if="!image">
        <input type="file" @change="onFileChange">
    </div>
    <div v-else>
        <img :src="image" class="img" />
        <!-- <button @click="removeImage">Remove image</button> -->
    </div>
    <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
</form>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import swal from 'sweetalert';
export default {
    name: 'Add',
    components: {
        Header
    },
    data() {
        return {
            name: '',
            address: '',
            contact: '',
            image: ''

        }
    },
    methods: {
        async addRestaurant() {
            console.log("New Resto:", this.restaurant)
            let result = await axios.post('http://localhost:3000/restaurant', {

                name: this.name,
                address: this.address,
                contact: this.contact,
                image: this.image

            })
            console.log("POST Result:", result)
            if (result.status == 201) {
                swal("Inserted!", "New Record Inserted!", "success");
                console.log("New record done!")
                localStorage.setItem("Restaurant-info", JSON.stringify(result.data))
                this.$router.push({
                    name: 'Home'
                })
            }
        },
        onFileChange(e) {`bn`
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            //   var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    },
    mounted() {
        let user = localStorage.getItem('User-info')
        if (!user) {
            this.$router.push({
                name: 'Signup'
            })
        }
    }
}
</script>
