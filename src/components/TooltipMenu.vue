<template lang="pug">
  v-popover.tooltip-menu
    .tooltip-menu__container
      slot(name="target")
      span.tooltip-menu__arrow
    template(slot="popover")
      .tooltip-menu__content
        slot(name="menu")
</template>

<script>

export default {
  data() {
    return{

    }
  },
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.tooltip-menu
  

  &__container
    display: flex
    align-items: center
  
  &__arrow
    background: url("../assets/images/Vector.png") no-repeat right center
    width: 11px
    height: 6px
    margin-left: 10px
    vertical-align: middle
    transition: all 0.3s  ease-in-out

    .tooltip-menu.open &
      transform: rotate(180deg)
      transition: all 0.3s  ease-in-out

  &__content
    background-color: #fff
    border: 1px solid #CDD3DB
    position: absolute
    right: -60px
    top: 34px
    border-radius: 5px
    height: auto

</style>
