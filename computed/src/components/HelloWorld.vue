<template>
<h1>Computed and data property</h1>

<h4>__data property__</h4>
<p>{{(doller*rupees)-discount}}</p>
<p>{{(doller*rupees)-discount}}</p>
<p>{{(doller*rupees)-discount}}</p>

<h3>using data property, <br />it calculate every time same operation in template expression</h3>

<h4>__computed property__</h4>
<p>{{getResult}}</p>
<p>{{getResult}}</p>
<p>{{getResult}}</p>

<h3>using computed property,<br /> it does not calculate every time same operation<br />
    we can use computed property result in template
</h3>

<h1>watch property</h1>
<h4>{{count}}</h4>
<button v-on:click="count=count+1"> + </button>
<button v-on:click="count=count-1"> - </button>

<h3>watch is an object where keys are reactive properties to watch</h3>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            doller: 100,
            rupees: 70,
            discount: 10,
            count: 0
        }
    },
    computed: {
        getResult() {
            return (this.doller * this.rupees) - this.discount
        }
    },
    watch: {
        count(val, prev) {
            if(val>5 && val>prev){
              alert("counting..")
            }
            
        }

    }
}
</script>
