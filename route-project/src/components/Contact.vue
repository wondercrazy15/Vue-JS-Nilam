<template>
<h1>Contact</h1>
<div class="container">
    <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" v-model="name" name="name" placeholder="Your Name">
        <label>Email</label>
        <input type="email" v-model="email" name="email" placeholder="Your Email">
        <label>Message</label>
        <textarea name="message" v-model="message" cols="30" rows="5" placeholder="Message">
          </textarea>

        <input type="submit" value="Send">
    </form>
</div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail() {

            emailjs.sendForm('service_hgac1z5', 'template_m6auky6', this.$refs.form,
                    'user_jcTuJheDUzomLma7RkwgG', {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    })
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                })
                this.name = ''
      this.email = ''
      this.message = ''
        }
    }
}
</script>

<style>
form {
    max-width: 400px;
    margin: 75px auto;
    background: rgb(219, 193, 193);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: rgb(26, 25, 25);
    margin: 25px 0 15px;
    display: inline-block;
    font-size: 0.6em;
    font-weight: bold;
}

input,
textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #aaa;
    border-radius: 10px;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
margin-left: 145px;
    width: 100px;
    margin-top: 10%;
}

input[type=submit]:hover {
    background-color: #45a049;
}

form:hover {
    box-shadow: 0 0 15px 1px rgba(52, 52, 52, 0.25)
}

h1 {
    z-index: 999;
    position: absolute;
    justify-content: center;
    display: flex;
    width: 100%;
    font-family: "poppins bold";
    color: rgba(30, 29, 29, 0.85);
    letter-spacing: 2px;
    text-shadow: 2px 2px 0px rgba(37, 37, 37, 0.421);
}

</style>
