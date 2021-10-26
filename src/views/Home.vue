<template lang="pug">
  .home
    Header
    .home__main-container
      Tasks
      .home__container
        .home__left
          short-tutorial(id="element-short")
          general-information(id="element-general")
          //- video-lessons(id="element-video")
          reviews(id="element-review")
        .home__right
          side-menu.home__side-menu

</template>

<script>

export default {
  components: {
    Header: () => import("@/components/Header.vue"),
    Tasks: () => import("@/components/Tasks.vue"),
    ShortTutorial: () => import("@/components/ShortTutorial.vue"),
    GeneralInformation: () => import("@/components/GeneralInformation.vue"),
    VideoLessons: () => import('@/components/VideoLessons.vue'),
    Reviews: () => import('@/components/Reviews.vue'),
    SideMenu: () => import('@/components/SideMenu')
  },
  data(){
    return {
      
    }
  },
  mounted(){
    console.log(this.$refs.menu);
  }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.icon
  width: 100px
  height: 100px
.home

  &__main-container
    margin: 0 auto
    width: calc(100% - 160px)

  &__container
    display: flex

  &__left
    width: 69%
    margin-right: 50px

  &__right
    padding-left: 50px
    position: relative

  &__side-menu
    position: sticky
    top: 15%

  &__tooltip
    width: 150px

</style>
