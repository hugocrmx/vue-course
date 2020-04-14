<template>
  <div>
      <card
        v-for="user in listOfUsers" :key="user.email" 
        :user="user" />
  </div>
</template>

<script>
import Card from './Card.vue';
import { mapGetters } from "vuex";

export default {    
    name: 'Users',
    components: {
        Card
    },
    computed:{
        ...mapGetters({
            listOfUsers: 'usersRegistered'
        })
    }
}
</script>

<style scoped>
    .counters{
        width: auto;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #4f4f4f;
        font-size: 18px;
        background-color:cadetblue;
        margin-bottom: 10px;
    }

</style>