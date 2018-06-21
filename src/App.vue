<template>
  <div id="app">
    <Header />
    <div class="title-section-top">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
*{
  margin: 0;
  box-sizing: border-box;
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
h1{
  font-size: 22px;
}
</style>
