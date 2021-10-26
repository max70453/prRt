<template lang="pug">
  .video
    iframe(:src="videoProps.source", alt="", modestbranding, frameborder="0", allowfullscreen).video__iframe
    img(src="@/assets/images/time-label.png").video__time-img
    span.video__time {{ videoProps.videoTime }}
    .video__description {{ videoProps.subtitle }}
</template>

<script>
export default {
  props: ['videoProps'],
  data(){
    return{
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '@/common/index'

.video
  
  &__iframe
      width: 100%
    
  &__time-img
    position: absolute
    top: 125px
    left: 10px

  &__time
    position: absolute
    display: block
    bottom: 94px
    left: 14px
    font-size: 14px
    font-weight: 22px
    color: #fff

  &__description
    color: $color-text-base
    font-family: $font-family-bold
    font-size: 14px
    line-height: 22px
    text-align: center

</style>