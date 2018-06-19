<template>
  <div id="app">
    <Header />
    <div class="title-section-top">
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
*{
  margin: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
.title-section-top{
    background-color: #e1e1e1;
    width: 100%;
    padding-top: 15px;
  }
</style>
