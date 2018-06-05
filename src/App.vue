<template>
  <div id="app">
    <Header />
    <body class="title-section-top">
      <Section />
    </body>
  </div>
</template>

<script>
import Header from './components/Header'
import Section from './components/Section.vue'

export default {
  name: 'app',
  components: {
    Section,
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
