<template>
  <div>
    <div class="user-top">
      <div class="ttp" >
      <router-link class="home" to='/'>
        主页/
      </router-link>
    </div>
    <div class="wrap">
      <div class="top">
      <img :src="user.avatar_url" alt="">
      <span>
        {{user.loginname}}
      </span>
      </div>
      <span>
        积分:{{user.score}}
      </span>
      </div>
    </div>
    <div style="margin-top:10px;">
      <div class="ttp" >
        最近创建的话题
      </div>
      <div class="wrap" style="padding-bottom:0;">
        <ul>
          <li class="list" v-for="t in user.recent_topics.slice(0,5)" :key="t.id">
            <router-link :to="`/user/${t.author.loginname}`"><img :title='t.author.loginname' style="width:30px;height:30px" :src='t.author.avatar_url' alt=""></router-link>
          <router-link :to="`/topic/${t.id}`"><span :title="t.title" class="post-title">{{t.title}}</span></router-link>
          </li>
        </ul>
      </div>
    </div>
    <div style="margin-top:10px;">
      <div class="ttp" >
        最近参与的话题
      </div>
      <div class="wrap" style="padding-bottom:0;">
        <ul>
          <li class="list" v-for="t in user.recent_replies" :key="t.id">
            <router-link :to="`/user/${t.author.loginname}`"><img :title='t.author.loginname' style="width:30px;height:30px" :src='t.author.avatar_url' alt=""></router-link>
          <router-link :to="`/topic/${t.id}`"><span :title="t.title" class="post-title">{{t.title}}</span></router-link>
          </li>
        </ul>
      </div>
    </div>
   
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

<style scoped>
  img{
    width: 40px;
    height: 40px;
    border-radius: 3px;
  }
  .list{
  padding: 10px;
  border-bottom: 1px solid #ccc;
  color:#333;
  display: flex;
  align-items: center;
}
.post-title{
    width: 70%;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin-left: 10px;
  }
a{
  color:#333;
}
ul{
  margin: 0;
  padding: 0;
}
  .wrap{
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
  }
  .top{
    display: flex;
  }
  .ttp{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #e5e5e5
  }
  .home{
    color:#80bd01;
  }
  .home:hover{
    text-decoration: underline;
  }
</style>
