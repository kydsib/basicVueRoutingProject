<template>
   <div class="container-box">
    <div class="container-box__info">
  
    <ul v-for="(skill, i) in skills">
      <li>
       {{i +1}}. {{skill.name}}
      </li>
    </ul>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Knowledge',
    data () {
      return {
        skills: [
          {name: 'Counting odds'},
          {name: 'Making calls'},
          {name: 'Hiring people'}
        ]
      }
    }
}
</script>

<style lang="scss">
.container-box {
  margin-top: 2vh;
  background-color: gainsboro;
  padding: 40px 20px;
}
</style>
