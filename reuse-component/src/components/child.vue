<template>
<h3>I'm Child Component</h3>

<p>Name : {{data.name}}</p>
<p>E-mail : {{data.email}}</p>
<button v-on:click="getData(data.name)">Get Data</button>
<h4 v-html="msg"></h4>
<h4 :class="applyClass" v-html="msg1"></h4>
<button v-on:click="colourfull=!colourfull">Class Binding</button>

<button v-on:click="getUser(childName)">Get User Data</button>
</template>

<script>
export default {
    name: 'Child',
    props: {
        data: Object,
        getData: Function,
        getUser:Function

    },
    data() {
        return {
            msg: '<b>This is HTML binding-1</b>',
            msg1: '<i>This is HTML binding-2</i>',
            colourfull: false,
            childName:'vue js child component'
        }
    },
    computed: {
        applyClass() {
            return {
                green: this.colourfull,
                red: true,
                other: true
            }

        }

    }

}
</script>

<style>
.green {
    background-color: green;
    padding: 10px;

}

.red {
    color: red;
}

.other {
    font-size: 40px;
}
</style>
