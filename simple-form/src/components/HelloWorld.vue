<template>
  <div>
    <p>Bruce</p>
    <p>Rony</p>
  
    <p>{{data}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props:{
    data:String
  }
}
</script>