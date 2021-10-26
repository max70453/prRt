<template lang="pug">
  .nav-projectMenu
    vue-scroll(:ops="ops")
      ul.nav-projectMenu__list
        li(v-for="(item, index) in option").nav-projectMenu__item
          .nav-projecMenu__image(@click="item.is_favorite = !item.is_favorite")
            .nav-projectMenu__itemPic(v-if="item.is_favorite")
              img(:src="require(`@/assets/images/${item.imgFill}`)").nav-projectMenu__itemImg
            .nav-projectMenu__itemPic(v-else)
              img(:src="require(`@/assets/images/${item.imgBlanc}`)").nav-projectMenu__itemImg
          .nav-projectMenu__itemTitle {{ item.label }}
          .nav-projectMenu__navMine-tasks(v-if="item.my_tasks > 0") {{ item.my_tasks }}
          .nav-projectMenu__navOpen-tasks(v-if="item.all_tasks > 0") {{ item.all_tasks }}  
      .nav-projectMenu__transparent
</template>

<script>
export default {
  props: ['option'],
  components:{
    
  },
  data(){
    return{
      ops:{
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: '#93979B',
          opacity: 1,
          specifyBorderRadius: false,
          minSize: 0,
          size: '6px',
          disable: false
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.nav-projectMenu
  padding: 25px 5px 0 0
  width: 349px
  height: 325px
  background: #fff
  border: 1px solid #CDD3DB
  border-radius: 5px
  right: -70px
  top: 7px
  position: absolute

  &::before,
  &::after
    content: ""
    position: absolute
    top: -10px
    left: 215px
    border-bottom: 11px solid white
    border-left: 11px solid transparent
    border-right: 11px solid transparent

  &::before
    top: -11px
    border-bottom-color: #CDD3DB

  &__item
    display: flex
    align-items: center
    margin-bottom: 15px
    margin-right: 16px

    &:last-child
      margin-bottom: 0

  &__itemImg
    margin-right: 9px
    margin-left: 25px
    cursor: pointer
  
  &__itemTitle
    font-size: 14px
    line-height: 18px
    color: $color-text-base
    opacity: 0.5
    margin-right: auto

  &__navMine-tasks
    margin-right: 5px

  &__navMine-tasks
    display: flex
    align-items: center
    justify-content: center
    background: #0066FF
    width: 35px
    border-radius: 5px
    height: 25px
    color: #fff
    font-size: 14px
    line-height: 17px
  
  &__navOpen-tasks
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid #CDD3DB
    font-size: 14px
    line-height: 17px
    width: 35px
    height: 25px
    color: #93979B
    border-radius: 5px
  
  &__transparent
    position: sticky
    bottom: 0
    width: 100%
    height: 76px
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)

</style>