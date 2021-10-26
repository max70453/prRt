<template lang="pug">
  .user-menu
    ul.user-menu__tooltip-list
      li(v-for="item in tooltipProfile").user-menu__tooltip-item
        a(:href="item.url").user-menu__tooltip-link {{ item.label }}
    .user-menu__logOut
      a(href="#").user-menu__logOut-link Выход
</template>

<script>

export default {
  data() {
    return{
      tooltipProfile: [
        { label: 'Профиль', url: '#' },
        { label: 'Статистика', url: '#' },
        { label: 'Токены', url: '#' },
        { label: 'API', url: '#' }
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.user-menu

  &::before,
  &::after
    content: ""
    position: absolute
    top: -10px
    left: 115px
    border-bottom: 11px solid white
    border-left: 11px solid transparent
    border-right: 11px solid transparent

  &::before
    top: -11px
    border-bottom-color: #CDD3DB

  &__tooltip-list
    width: 200px
    padding: 15px 15px 0 15px
    
  &__tooltip-item
    margin-bottom: 11px
    
    &:last-child
      padding-bottom: 15px
      border-bottom: 1px solid #CDD3DB
    
  &__tooltip-link
    color: $color-text-base
    font-size: 14px
    line-height: 17px
    
  &__logOut
    padding: 0 0 20px 15px
  
  &__logOut-link
    color: #93979B
    font-size: 14px
    line-height: 17px
    margin-bottom: 20px

</style>
