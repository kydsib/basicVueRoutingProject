<template>
  <div class="contact-me">
    <h2>Contact me</h2>

    <form class="form">
      <label class="form--title" fro="name">Name</label>
      <input class="form--data form--data--name" id="name" type="text" placeholder="Enter your name">
      <label class="form--title" for="message">Message</label>
      <textarea class="form--data" id="message" type="text" cols="80" rows="8" placeholder="Enter your message"></textarea>
      
    </form>
    <BaseButton>Sbmit</BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
// import BaseTextField from '@/components/BaseTextField'
export default {
    name: 'ContactsView',
    components: {
      BaseButton
    }
}
</script>

<style lang="scss">
.form {
  margin: 3vh auto;
  display: flex;
  flex-direction: column;

  &--title {
    padding-bottom: 1vh;
  }

  &--data {
    margin-bottom: 2vh;
    padding: 15px 15px;
    font-size: inherit;
    border: 1px solid #999;
    border-radius: 4px;

    &--name {
      width: 30%;
    }
  }
}
input-message {
  width: 100%;
}
</style>
