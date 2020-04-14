<template>
  <div id="app">
      <div class="container">
        <div  class="row">
          <div  class="col-6">
            <counter/>
          </div>
          <div  class="col-6">
          
         </div>
        </div> 
        <div  class="row">
           <div  class="col-6">
             <basic-form/>
          </div>
          <div  class="col-6">
            <users/>
         </div>
        </div> 
      </div> 
  </div>
</template>

<script>
import BasicForm from './components/BasicForm.vue'
import Counter from './components/Counter.vue'
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    BasicForm,
    Counter,
    Users
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
