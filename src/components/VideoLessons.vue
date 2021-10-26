<template lang="pug">
  .video-lessons
    .video-lessons__title {{ title }}
    .video-lessons__cards
      div(v-for="prop in props").video-lessons__card
        Video(:videoProps="prop")
             
</template>

<script>
export default {
  components: {
    Video: () => import('@/components/Video.vue')
  },
  data(){
    return {
      title: 'Видео-уроки',
      props: 
      [
        {
          source: 'https://www.youtube.com/embed/qZXt1Aom3Cs',
          poster: 'business-vision.jpg',
          subtitle: 'команда и управление людьми',
          videoTime: '1:50'
        },
        {
          source: 'https://www.youtube.com/embed/4xyb_tA-uw0',
          poster: 'business-vision.jpg',
          subtitle: 'Мотивирование подчиненных и коллег к участию в улучшениях',
          videoTime: '18:26'
        },
        {
          source: 'https://www.youtube.com/embed/NtlVno8igVQ',
          poster: 'business-vision.jpg',
          subtitle: 'Навык постоянного личностного развития',
          videoTime: '06:31'
        },
        {
          source: 'https://www.youtube.com/embed/nldxXSjpX0I',
          poster: 'business-vision.jpg',
          subtitle: 'Принятие на себя лидерства',
          videoTime: '17:37'
        },
        {
          source: 'https://www.youtube.com/embed/Gp2d7TWXNpw',
          poster: 'business-vision.jpg',
          subtitle: 'Личная эффективность',
          videoTime: '40:40'
        },
        {
          source: 'https://www.youtube.com/embed/0xt_Jv-P_Vo',
          poster: 'business-vision.jpg',
          subtitle: 'Факторы влияющие на вовлеченность в коллективе',
          videoTime: '5:10'
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.video-lessons
  margin-bottom: 69px

  &__title
    color: $color-text-base
    font-family: $font-family-bold
    font-size: 25px
    line-height: 37px
    margin-bottom: 24px
  
  &__cards
    display: flex
    align-items: center
    width: 100%
    flex-wrap: wrap
  
  &__card
    width: calc(100% / 3 - 40px)
    border: 1px solid #CDD3DB
    border-radius: 5px
    height: 244px
    position: relative
    margin-bottom: 20px
    margin-right: 20px

    &:last-child
      margin-right: 0

</style>