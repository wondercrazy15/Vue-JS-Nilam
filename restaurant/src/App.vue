<template>
<router-view />
</template>

<script>

export default {
    name: 'App',
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

body {
    padding: 0;
    margin: 0;
}

.logo {
    width: 150px;
    transition: 2s;
    border-radius: 100%;
    margin-top: 3%;
    box-shadow: 0 0 5px 1px rgba(238, 184, 202, 1);
}

.register input,
.login input,
.form input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(248, 116, 116);
}

.register button,
.login button,
.form button {
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(248, 116, 116);
    background-color: green;
    color: white;
}

.img {
    width: 23%;
    margin: auto;
    display: block;
    margin-bottom: 10px;
    border-radius: 50px;
}
</style>
