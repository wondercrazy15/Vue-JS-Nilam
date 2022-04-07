<template>
<Header />
<img class="logo" alt="Vue logo" src="../assets/restaurant.png">
<h3>Update Restaurant Details</h3>

<form class="form">
    <input type="text" name="name" placeholder="Restaurant Name" v-model="name">
    <input type="text" name="address" placeholder="Restaurant Address" v-model="address">
    <input type="text" name="contact" placeholder="Restaurant Contact" v-model="contact">
    <div v-if="!image">
        <input type="file" @change="onFileChange">
    </div>
    <div v-else>
        <img :src="image" class="img" />
        <button @click="removeImage">Remove image</button>
    </div>
    <button type="button" v-on:click="updateRestaurant">Update Restaurant Details</button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
import swal from 'sweetalert';
export default {
    name: 'Update',
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
    async mounted() {
        let user = localStorage.getItem('User-info')
        if (!user) {
            this.$router.push({
                name: 'Signup'
            })
        }
        let result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
        console.log("Update Data:", result)
        //   console.log(this.$route.params.id) id which we define in route file
        this.name = result.data.name
        this.address = result.data.address
        this.contact = result.data.contact
        this.image = result.data.image
    },
    methods: {
        async updateRestaurant() {
            // console.log("Update data:",this.restaurant)
            let result = await axios.put('http://localhost:3000/restaurant/' + this.$route.params.id, {
                name: this.name,
                address: this.address,
                contact: this.contact,
                image: this.image
            })

            // result.data.name=this.name
            // result.data.address=this.address
            // result.data.contact=this.contact

            console.log("Updated Result:", result)
            if (result.status == 200) {
                console.log("Update record done!")
                swal("Updated!", "Your data is Updated!", "success");
                localStorage.setItem("Restaurant-info", JSON.stringify(result.data))
                this.$router.push({
                    name: 'Home'
                })
            }
        },
        onFileChange(e) {
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
        },
        removeImage: function () {
            this.image = '';
        }
    }

}
</script>
