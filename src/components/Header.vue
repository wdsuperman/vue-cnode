<template>
  <div class="header">
    <div class="top">
      <router-link class="logo" to='/'>
        <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
      </router-link>
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
}
</script>

<style scoped>
  .header{
    width: 100%;
    background-color: #444;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .header>.top>.logo>img{
    width: 120px;
  }
  .top{
    background: 0 0;
    border-radius: 0;
    border: none;
    box-shadow: none;
    width: 90%;
    margin: auto;
    padding: 5px;
    display: flex;
  }
  .logo{
    display: block;
  }
</style>
