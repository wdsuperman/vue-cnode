<template>
  <body>
    <div class="wrap">
      <div class="top">
        <div v-for="title in titles" :key="title.type"  :class=" title.type === tab ? 'bian' :'section-top'" @click="type(title.type)">
          {{title.name}}
        </div>
      </div>
      <ul class="post">
        <li class="list" v-for="t in posts" :key="t.id" v-if="t.good || t.top || t.tab">
          <img :title='t.author.loginname' style="width:30px;height:30px" :src='t.author.avatar_url' alt="">
          <span class="hf">
            <span style="color: #9e78c0;font-size: 14px;" title="回复数">{{t.reply_count}}</span>
          /
          <span style="color: #b4b4b4;font-size: 14px;" title="点击数">{{t.visit_count}}</span>
          </span>
          <span :class="t.good || t.top ? 'tab ' : 'tab active' ">{{t.good ? '精华':''||t.top ? '置顶':''||get(t.tab)}}</span>
          <span :title="t.title" class="post-title">{{t.title}}</span>
        </li>
      </ul>
    </div>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Section',
  methods:{
    type(tab){
      this.$store.dispatch({ type: 'addTabs',tab})
    },
    get(tab){
      console.log(tab)
      switch (tab) {
        case 'share':
          '分享'
          return '分享'
        case 'ask':
          '问答'
          return '问答'
        case 'job':
          '招聘'
          return '招聘'
        default:
          break;
      }
      return tab
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
    },
    tab(){
      return this.$store.state.title.tabs
    }
  }
}
</script>

<style scoped>
.list{
  padding: 14px;
  border-bottom: 1px solid #ccc;
  color:#333;
}

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
    padding:1px 2px;
  }
  .bian{
    margin:0 10px;
    padding:1px 2px;
    color:#fff;
    background-color: #80bd01;
    border-radius:2px;
  }
  .section-top:hover{
    color:blue;
  }
  .post{
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    padding: 0;
  }
  .post>li{
    display: flex;
    align-items: center;
  }
  .post-title{
    width: 70%;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .tab{
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin: 0 10px;
  }
  .active{
    background-color: #e5e5e5;
    color: #999;
  }
  .hf{
    width: 80px;
    text-align: center;
  }
  .tive{
  font-size: 100px;
}
</style>
