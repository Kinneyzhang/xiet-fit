<template>
<div class="hello">
  <!-- <img src="../assets/imgs/xiaomi.jpg" /> -->
  <vue-typed-js :strings="[sentence1, sentence2]">
    <p class="typing"></p>
  </vue-typed-js>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      sentence1: '你若安好，便是晴天! ^1000 which gets paused for 1 second',
      sentence2: 'wow, interesting',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
img {
  border: 2px solid #ccc;
  padding: 2px;
  border-radius: 2px;
  width: 300px;
  margin-left: 0;
}
</style>
