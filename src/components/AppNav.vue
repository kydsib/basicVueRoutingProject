<template>
  <nav class="app-nav">
    <ul class="app-nav--container">
      <li class="app-nav__list">
        <RouterLink class="nav-link"
        v-for="route in links"
        :key="route.name"
        :to="{name: route.name}" exact
        >
          {{route.name}}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import routes from '@/routes'
export default {
 name: 'AppNav',
   data () {
      return {
        routes
      }
    },
    computed: {
      links () {
        return this.routes.filter(route => route.meta.displayName)
      }
    }
}
</script>

<style lang="scss">
.nav-link {
  color: white;
  padding-left: 20px;
}
.nav-link:visited {
  color: white;
}
.nav-link:focus {
  color: #37e9b8;
}
.nav-link:active {
  color: #37e9b8;
}
.app-nav {
  &--container {
    display: flex;
    justify-content: flex-end;
    margin-right: 10%;

    &__list {
      margin-left: 15px;
    }
  }
}
/* .router-link-active {
  color: #37e9b8;
} */
ul {
  list-style: none;
}
</style>