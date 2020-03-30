<template>
  <div id="app">
    <PostCard 
      v-for="post in posts" :key="post.id"
      :post="post"
      :likes=randomlikes()
    />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard'
import axios  from "axios";
export default {
  name: 'App',
  components: {
    PostCard
  },
  data(){
    return {
      posts: []
    }
  },
  mounted(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then( response => {
        this.posts = response.data
      })
      .catch( error => {
        console.error(error)
      })
  },
  methods: {
    randomlikes() {
          this.likes = Math.floor(Math.random() * 50);
          return this.likes;
      }
  }   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
