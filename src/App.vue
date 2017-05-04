<template>
  <div class="wrap">
    <div class="nav">
      <router-link to="/Hello">Hello</router-link>
      <router-link to="/Sidebar">Sidebar</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  .wrap{
    width:600px;
    margin:40px auto;
  }
  .wrap .nav{
    padding: 10px 20px;
    background:#eee;
  }
  .wrap .container{
    width:600px;
    padding:20px;
    border:1px solid #ddd;
  }
</style>
<script>
</script>
