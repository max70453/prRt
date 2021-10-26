<template lang="pug">
  .task-button
    a(href="#").task-button__link {{text}}

</template>

<script>
export default {
  props:{
    text: {
      type: String,
      default: "button",
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.task-button

  &__link
    display: block
    width: 100%
    padding: 18px
    border: 1px solid #CDD3DB
    border-radius: 500px
    font-size: 15px
    line-height: 18px
    font-family: "Montserrat-bold"
    color: $color-text-base
    text-align: center

</style>