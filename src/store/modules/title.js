import axios from 'axios'
const state = {
  all: [
    {
      type:'all',
      name:'全部'
    },
    {
      type:'good',
      name:'精华'
    },
    {
      type:'share',
      name:'分享'
    },
    {
      type:'ask',
      name:'问答'
    },
    {
      type:'job',
      name:'招聘'
    }
  ],
  posts:[],
  tabs:'all'
}
const mutations = {
  addPost(state ,post){
    state.posts=post
  },
  addTabs(state,tab){
    state.tabs = tab
  }
}
const actions = { 
  addPost({commit}){
    const uri =`https://cnodejs.org/api/v1/topics/?tab=${state.tabs}`
    axios.get(uri).then(res => {
      let post = res.data.data
      commit('addPost', post)
    })
  },
  addTabs({commit},{tab}){ 
    commit('addTabs', tab)
    const uri =`https://cnodejs.org/api/v1/topics/?tab=${state.tabs}`
    axios.get(uri).then(res => {
      let post = res.data.data
      commit('addPost', post)
      console.log(post)
    })
  }
}
export default {
  state,
  actions,
  mutations
}