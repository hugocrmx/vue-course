<template>
  <div class="post">
    <img class="avatar" :src="retrieveImage(post.id)" alt="post" />
    <div class="comment_container">
      <div class="info">
        <b>{{user.name}}</b>  
        <p>{{post.title}}</p>
        <p style="color:grey;">{{post.body}}</p>
      </div>
      <div class="likes">
          <a href="#" @click.prevent="addLike()">💙</a>
          {{numberOfLikes}}
      </div>
    </div>
  </div>
</template>

<script>
import axios  from "axios";

export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      require: true
    },
    likes: {
        require: true
    }
  },
   data(){
    return {
        numberOfLikes: this.likes,
        user: Object
    }
  },
  created(){
       axios.get("https://jsonplaceholder.typicode.com/users/"+this.post.userId)
        .then( response => {
        this.user = response.data
        })
        .catch( error => {
            console.error(error)
        })
  },
  methods: {
    retrieveImage(postId) {
        const photos = [require("../assets/perro.png"), require("../assets/gato.png")];
        const index = postId % 2 == 0 ? 1 : 0;
        return photos[index];
    },
    addLike() {
        this.numberOfLikes = this.numberOfLikes + 1    
        return this.numberOfLikes;
    },
  }
};
</script>

<style scoped>
.post {
    display: flex;
    flex-flow: row;
    width: 680px;
    margin: 16px auto;
    border-bottom: 1px solid #E4E4E4;
    font-size: 12px;
}

.comment_container {
    padding-bottom: 10px;
}

.avatar {
    width: 70px;
    height: 70px;
    margin-right: 30px;
}

.info {
    text-align: left;
}

.likes {
    text-align: right;
    font-size: 10px;
    color:blue;
}

.info p {
    margin: 5px 0;
}
</style>