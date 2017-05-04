<template>
  <ul class="item-list">
    <li v-for="(item,index) in todoList">
      <a href="javascript:;" class="delete-item" v-on:click="deleteItem(index)">X</a>
      <dl class="clearfix">
        <dt><img :src="item.avatar" width="100" height="100"/></dt>
        <dd>{{item.name}}</dd>
        <dd>{{item.date}}</dd>
        <dd>{{item.comment}}</dd>
      </dl>
    </li>
  </ul>
</template>
<style>
  .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
  .clearfix{*+height:1%;}
  .item-list li{
    padding:0;
    marign:0;
    padding:10px 0;
    list-style:none;
    border-bottom:1px solid #ddd;
  }
  .item-list li dl{
    padding:0;
    margin:0;
  }
  .item-list li dl dt{
    float:left;
  }
  .item-list li dl dd{
    text-align:left;
    margin-left:130px;
    padding:4px 0;
  }
  .item-list li .delete-item{
    float:right;
    text-align:center;
    height:40px;
    line-height:40px;
    width:40px;
    background:#ddd;
    border-radius:50%;
  }
</style>
<script>

  export default {
    computed: {
      todoList () {
        console.log(this.$store)
        return this.$store.state.list
      }
    },
    methods: {
      deleteItem: function (index) {
        this.$store.commit('deleteTodoItem', index)
      }
    }
  }
</script>
