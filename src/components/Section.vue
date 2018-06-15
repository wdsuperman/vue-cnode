<template>
  <body>
    <div class="wrap">
      <div class="top">
        <div  v-for="title in titles" :key="title.type" class="section-top" @click="type(title.type)">
          {{title.name}}
        </div>
      </div>
      <ul>
        <li v-for="t in posts" :key="t.id">
          {{t.title}}
        </li>
      </ul>
    </div>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Section',
  data:()=>({
    tab:'job'
  }),
  methods:{
    type(tab){
      this.$store.dispatch({ type: 'addTabs',tab})
    }
  },
  created: function () {
    this.$store.dispatch({ type: 'addPost' })
  },
  computed:{
    titles(){
      return this.$store.state.title.all
    },
    posts(){
      return this.$store.state.title.posts
    }
  }
}
</script>

<style scoped>
  .top{
    display: flex;
    width: 90%;
    margin: 0 auto;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    height: 40px;
    align-items: center;
  }
  .section-top{
    margin:0 10px;
    color:#80bd01;
  }
  .section-top:hover{
    color:blue;
  }
</style>
