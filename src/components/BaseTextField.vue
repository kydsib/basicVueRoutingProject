<template>
  <div class="text-field">
      <input 
        type="type" 
        class="text-field__input"
        v-on="listeners"
      >
  </div>
</template>

<script>
export default {
 name: 'BaseTextField',
 props: {
     value: {
         type: String,
         default: null,
     },
     type: {
         type: String,
         default: 'text'
     },
     labelText: {
         type: String,
         default: null
     }
 }
}
</script>

<style>

</style>