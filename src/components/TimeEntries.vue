<template>
  <div class="text-list">
    <ul>
      <li v-for="(item, index) in textList">{{item.content}}</li>
    </ul>
  </div>
</template>
<style>
  ul,li{
    padding:0;
    margin:0;
    list-style:none;
  }
  .text-list{
    padding:20px;
  }
  .text-list li{
    padding:6px;
    border-bottom:1px solid #ddd;
    text-indent:2em;
  }
</style>

<script>
  export default {
    computed: {
      textList () {
        console.log("test");
        return this.$store.state.textList
      }
    }
  }
</script>

