<template>
   <div class="container-box">
    <div class="container-box__info">
  
    <ul v-for="(job, i) in jobs">
      <li>
       {{i +1}}. {{job.name}}
      </li>
    </ul>
    </div>

  </div>
</template>

<script>

export default {
    name: 'Career',
    data () {
      return {
        jobs: [
          {name: 'Shoving allins for a living'},
          {name: 'Selling stuff'},
          {name: 'Managing stuff'}
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
