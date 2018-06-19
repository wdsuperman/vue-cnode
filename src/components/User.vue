<template>
  <div>
    <img :src="user.avatar_url" alt="">
    {{user.loginname}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'User',
  data:()=>({
    user:''
  }),
  created:function(){
    const {username} = this.$route.params
    const uri = `https://cnodejs.org/api/v1/user/${username}`
    axios.get(uri).then( res => {
      console.log(res.data.data)
      this.user = res.data.data
    })
  }
}
</script>

<style>

</style>
