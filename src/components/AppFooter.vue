<template>
  <footer class="app-footer">
      <p>&copy; 2019 {{name}} {{surname}} </p>
  </footer>
</template>

<script>
export default {
 name: 'AppFooter',
 data () {
      return {
        name: 'Simonas',
        surname: 'Keršulis'
      }
    }
}
</script>

<style lnag="scss">
    .app-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
    }
</style>