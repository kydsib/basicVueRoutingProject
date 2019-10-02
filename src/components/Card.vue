<template>
  <div class="card">
    
    <ul v-for="photo in imgData" >
        <li class="card--item" >
          <img class="card--image" :src="photo.source">
          <p class="card--description">{{photo.name}}</p>
        </li>
    </ul>
    

  </div>
</template>

<script>
export default {
    name: 'Card',
    data () {
      return {
       imgData: [
        {source: 'https://images-na.ssl-images-amazon.com/images/I/51rqAgewczL._SX425_.jpg', name: 'Count to infinity'},
        {source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo0_SzTWpK1zAmgUcRT06gHxNnfZdECoDcDGMt2NgwQx1rx9Dt', name: 'Visit Moon'},
        {source: 'http://blogs.colgate.edu/bookstore/files/2017/06/waldo-x-wide-community-300x250.jpg', name: 'Find Waldo'}
    ]
    } 
}
}
</script>

<style lang="scss">
.card {
  display: flex;
  padding-top: 5vh;
  justify-content: space-around;

  &--item {
    height: 220px;
    width: 220px;
    padding: 15px 15px 70px 15px;
    background-color: #3252e5;
    border-radius: 5px;

    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  &--description {
    padding-top: 10px;
    color: #fff;
  }
}
</style>