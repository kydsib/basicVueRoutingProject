<template>
  <div class="home">
    <h2 class="home--name">Projects</h2>
    <Card />
  </div>

</template>

<script>
import Card from '@/components/Card'
export default {
    name: 'HomeView',
    components: {
      Card
    }
}
</script>

<style lang="scss">
.home {
  &--name {
    padding-left: 2vw;
    font-size: 24px;
    font-weight: 600;
  }
}
</style>