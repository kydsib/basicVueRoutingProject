<template>
  <div class="white-box">
   
    <RouterView />
  </div>
</template>

<script>

export default {
    name: 'WhiteBox',
    components: {
    }
}
</script>

<style lang="scss">
.white-box {
  background-color: #fff;
  height: 58vh;
  padding: 6vh 3vw 0px 3vw;
  border-radius: 5px;
  width: 80vw;
  box-sizing: border-box;
  margin: -5vh 10% 0 10%;
}
</style>