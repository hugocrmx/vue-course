<template>
  <button class="action" @click="$emit(event)"> 
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    event: {
      type: String,
      default: 'click'
    }
  }
};
</script>

<style scoped>

</style>