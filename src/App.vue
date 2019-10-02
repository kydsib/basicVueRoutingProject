<template>
  <div class="app">
    <AppHeader />
    <WhiteBox>
   
    </WhiteBox>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import WhiteBox from '@/components/WhiteBox'
import AppFooter from '@/components/AppFooter'


export default {
 name: 'App',
 components: {
   AppHeader,
   WhiteBox, 
   AppFooter
 }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");
* {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
}
.app {
  font-family: "Open Sans";
  font-size: 14px;
  background-color: gainsboro;
  text-transform: uppercase;
}
</style>