<template>
  <div>
    <div class="top">
      <h1>
        {{topic.title}}
      </h1>
    </div>
    <div class="topic" v-html="topic.content">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Topic',
  data:()=>({
    topic:''
  }),
  created:function(){
    const {id} = this.$route.params
    const uri = `https://cnodejs.org/api/v1/topic/${id}`
    axios.get(uri).then( res => {
      this.topic = res.data.data
      console.log(res.data.data)
    })
  }
}
</script>

<style scoped>
  .topic{
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
  }
  .top{
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
  }
</style>
