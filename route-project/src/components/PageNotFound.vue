 
<template>
<h1 class="first">Ooops!</h1>
    <h1 class="second">Page Not Found!</h1>
    <!-- <h1>PageNotFound</h1> -->
    <img src="../assets/404-page.gif" alt="">
</template>
<script>
export default {
    name:'404Page'
}
</script>
<style>
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
.first{
    margin-top: 5%;
}
.second{
    margin-top: 32%;
}
</style>