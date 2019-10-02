<template>

  <div class="container-box">
    <div class="container-box__info">
  
    <ul v-for="(school, index) in schools">
      <li>
       {{index +1}}. {{school.name }} 
      </li>
    </ul>
    </div>

  </div>

</template>

<script>
export default {
    name: 'EducationProfileView',

    data () {
      return {
        schools: [
          {name: 'Splinters kung fu academy'},
          {name: 'Yodas advanced speaking patterns bootcamp'},
          {name: 'Dalis - melting stuff courses'}
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
