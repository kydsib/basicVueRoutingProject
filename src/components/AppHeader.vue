<template>
  <header class="app-header">
    <AppNav />
    <div class="app-header--description">
      <p class="name-sur">{{name}} {{surname}}</p>
      <p class="portfolio">Portfolio</p>
    </div>

  </header>
</template>

<script>
import AppNav from '@/components/AppNav'
export default {
    name: 'AppHeader',
    components: {
      AppNav
    },
    data () {
      return {
        name: 'Simonas',
        surname: 'Keršulis'
      }
    }
}
</script>

<style lang="scss">
.app-header {
  background-color: #3252e5;
  height: 40vh;
  display: flex;
  flex-direction: column;

  &--description {
    margin: 15vh auto;
    color: #fff;

    .portfolio {
      display: flex;
      font-weight: 600;
      font-size: 16px;
      justify-content: center;
    }
  }
  .name-sur {
    font-weight: 600;
    font-size: 36px;
  }
}
</style>