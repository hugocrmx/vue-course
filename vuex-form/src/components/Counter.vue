<template>
  <div class="counters">
   <b>{{ usersRegistered }}</b> usuarios
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {    
    name: 'Counter',
    computed:{
        ...mapGetters({
            usersRegistered: 'countUsers'
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
        background-color:cornflowerblue;
        margin-bottom: 10px;
    }

</style>