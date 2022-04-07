<template>
<h3>Home</h3>

<h1>Welvcome to Vue js</h1>
<img src="../assets/home.gif" alt="">
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
h1 {
    z-index: 999;
    position: absolute;
    justify-content: center;
    display: flex;
    width: 100%;
    font-family: "poppins bold";
    color: rgb(248, 116, 116);
    letter-spacing: 2px;
    text-shadow: 2px 2px 0px rgba(37, 37, 37, 0.421);
    margin: 0px auto;
}

h3 {
    z-index: 999;
    position: absolute;
    justify-content: center;
    display: flex;
    width: 100%;
    font-family: "poppins bold";
    color: rgba(30, 29, 29, 0.85);
    letter-spacing: 2px;
    text-shadow: 2px 2px 0px rgba(37, 37, 37, 0.421);
    margin: 47px auto;
}

img {
    margin: 110px auto;
}
</style>
