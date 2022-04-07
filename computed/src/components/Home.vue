<template>
<h1>Slots in Vue js</h1>
<h2>use multiple slots with name</h2>
<h3>Child component use in Home component</h3>

<child>
    <template v-slot:first>
        <h4>slot-1</h4>
        <h2>Hello world</h2>
    </template>
    <template v-slot:second>
        <h4>slot-2</h4>
        <img alt="img" src="../assets/logo.png">
    </template>
</child>
<child>
    <template v-slot:first>
        <h4>slot-1</h4>
        <h2>Reuse child component with image</h2>
    </template>
    <template v-slot:second>
        <h4>slot-2</h4>
        <img alt="img" src="../assets/Honeybee.jpg">
    </template>
</child>
<br /><br />
</template>

<script>
import Child from './child.vue'
export default {
    name: 'Home',
    components: {
        Child
    }
}
</script>

<style>
h1 {
    color: green;
}

h4 {
    color: blue;
}
</style>
