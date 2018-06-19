<template>
  <div>
    <h1>
      {{topic.title}}
    </h1>
    <div v-html="topic.content">
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

<style>

</style>
