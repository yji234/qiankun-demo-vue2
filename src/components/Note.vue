<template>
  <div class="note">
    <h1>这是一个vue页面的demo</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
      msg: 'Note'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
