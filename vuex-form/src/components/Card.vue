<template>
  <div class="counters">
      <div class="info">
        <b>{{user.name}} {{user.email}} {{user.age}} </b>
      </div> 
  </div>
</template>

<script>

export default {    
    name: 'Card',
    props: {
        user: {
        type: Object,
        require: true
        }
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
    .info p {
    margin: 5px 0;
    }

</style>