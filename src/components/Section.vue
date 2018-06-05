<template>
  <body>
    <div class="wrap">
      <div class="top">
        <div  v-for="title in titles" :key="title.type" class="section-top" @click="xx(title.type)">
          {{title.name}}
        </div>
      </div>
      <ul>
        <li v-for="t in title" :key="t.id">
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
    title:'',
    tab:''
  }),
  created:function(){
    const uri = `https://cnodejs.org/api/v1/topics/?tab=all`
    axios.get(uri).then(res => {
      this.title = res.data.data
      console.log(this.title)
    })
  },
  mounted:function(){
    const uri = `https://cnodejs.org/api/v1/topics/?tab=${this.tab}`
    axios.get(uri).then(res => {
      this.title = res.data.data
      console.log(this.title)
    })
  },
  computed:{
    titles(){
      return this.$store.state.title.all
    }
  },
  methods:{
    xx(i){
      this.tab = i
      console.log(this.tab)
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
