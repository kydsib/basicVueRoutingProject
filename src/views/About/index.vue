<template>
  <div class="about">
      <h2>About me </h2>

  <div class="about--summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius obcaecati vel quae at sapiente incidunt temporibus placeat earum nulla nesciunt, praesentium saepe sint debitis eveniet magnam ut voluptates nam?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente suscipit, cum quidem quae veritatis rerum obcaecati necessitatibus. Vitae eligendi nulla consequatur minus odit. Delectus cumque harum eos nulla enim ducimus.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam autem assumenda obcaecati reprehenderit alias nesciunt? Nihil, earum cum aliquam facere fuga iste accusantium necessitatibus perspiciatis sit. Natus, libero dolorem!
  </div>

  <div class="about__routes">
  <RouterLink class="about--link" :to="{name: 'About:Education'}" exact>Education</RouterLink>
  <RouterLink class="about--link" :to="{name: 'About:Career'}" exact>Career</RouterLink>
  <RouterLink class="about--link" :to="{name: 'About:Knowledge'}" exact>Knowledge</RouterLink>
  </div>
  
  <RouterView />
  </div>

</template>

<script>
export default {
    name: 'AboutView',
    
}
</script>

<style lang="scss">
.about {
  &--summary {
    text-transform: initial;
    margin-top: 2.5vh;
  }

  &__routes {
    margin-top: 4vh;
  }

  &--link {
    padding-right: 15px;
    font-weight: 400;
    font-size: 16px;
    color: black;
  }
  &--link:visited {
    color: black;
  }
  &--link:focus {
    color: #3252e5;
  }

  &--link:active {
    color: #3252e5;
  }
}
</style>