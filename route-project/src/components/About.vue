<template>
<h1>About</h1>
<div class="container">
    <div class="about-cart">
        <div class="images"><img src="../assets/logo.png" alt=""></div>
        <h1>About Vue js</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque nam quia commodi? Voluptates
            tenetur autem numquam. Tempora, corrupti tenetur ex sed officia facilis eius.</p>

    </div>

</div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
.container {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-decoration: none;

}

.about-cart {
    width: 400px;
    min-height: 500px;
    box-shadow: 0 0 5px 1px rgba(52, 52, 52, 0.224);
    position: relative;
    border-radius: 20px;
    transition: 2s;

}

.about-cart:hover {
    box-shadow: 0 0 15px 1px rgba(52, 52, 52, 0.25)
}

.about-cart::after {
    content: " ";
    background-image: linear-gradient(135deg, rgb(219, 193, 193), rgb(248, 116, 116) 100%);
    clip-path: circle(50% at 50% 1%);
    display: block;
    min-height: 500px;
    transition: 2s;
    border-radius: 20px;
}

.about-cart:hover::after {
    content: " ";
    clip-path: circle(100% at 50% 170%);
    transition: 2s;
    display: block;
    min-height: 500px;
    transition: 2s;
    border-radius: 20px;

}

img {
    width: 100px !important;
    height: 100px !important;
    position: absolute;
    top: 78px;
    left: 37%;
    z-index: 99999999;
    transition: 2s;
    border-radius: 100%;
}

.about-cart:hover img {
    

    transform: scale(1.3) translateY(20px);
    transition: 2s;

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

p {
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    text-align: center;
    top: 50%;
    font-family: "poppins";
    font-weight: 500;
    margin: 0 20px;
    color: rgba(30, 29, 29, 0.85);
    text-shadow: 1.5px 1.5px 0px rgba(37, 37, 37, 0.306);
}
</style>
