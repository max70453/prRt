<template lang="pug">
  .card 
    .card__header
      span.card__title Риск культура &nbsp;   
      span.card__subtitle — Сформировать мотивацию к дальнейшему развитию
    .card__content
      .card__content-left
        ul.card__list
          li(v-for="status in select").card__item 
            Select(:status="status")
      .card__content-right
        .card__date {{ date }}
        .card__container-info
          .card__comment {{ comment }}
          .card__rating {{ rating }}
      
</template>
<script>
export default {
  components: {
    Select: () => import("@/components/Select.vue"),
  },
  data(){
    return {
      date: '06.05.2020', 
      comment: 0, 
      rating: 2,
      select: [
        [
          {
            icon: 'status.png', text: ['В работе'], backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: ['В работе'] ,backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: ['В работе'] ,backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: ['В работе'] ,backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
        ],
        [
          {
            icon: 'status.png', text: 'Константин Серг...', backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: 'Константин Серг...', backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: 'Константин Серг...', backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: 'Константин Серг...', backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
        ],
        [
          {
            icon: 'status.png', text: 'Максимум', backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: 'Максимум', backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
          {
            icon: 'status.png', text: 'Максимум', backgroundColor: '#D9F5E6', colorText: '#32C979',
          },
        ],
          // {
          //   id: 1, 
          //   styleObject: {
          //     fontSize: '13px',
          //     width: '225px',
          //     'min-height': '33px',
          //     'box-shadow': 'none',
          //     paddingLeft: '48px',
          //   },
          //   colorIcon: '#32C979',
          //   colorBg: '#D9F5E6',
          //   aroww: 'aroww.png'
          // },
          // {
          //   id: 2, 
          //   icon: 'status.png', 
          //   text: ['Константин Серг...'],
          //   styleObject: {
          //     fontSize: '13px',
          //     width: '225px',
          //     'min-height': '33px',
          //     'box-shadow': 'none',
          //     'background-color': '#F1F3F5',
          //     paddingLeft: '48px'
          //   },
          //   colorIcon: '#32C979',
          //   colorText: '#93979B',
          //   colorBg: '#F1F3F5',
          //   aroww: 'aroww.png'
          // },
          // {
          //   id: 3, 
          //   icon: 'status.png', 
          //   text: ['Максимум'],
          //   styleObject: {
          //     fontSize: '13px',
          //     width: '225px',
          //     'min-height': '33px',
          //     'box-shadow': 'none',
          //     'background-color': '#F9E6D9',
          //     paddingLeft: '48px'
          //   },
          //   colorIcon: '#FF8330',
          //   colorText: '#FF8330',
          //   colorBg: '#F9E6D9',
          //   aroww: 'aroww.png'
          // },
      ]
    }
  },
  mounted(){
    // console.log(this.options.length)
  }
}
 
</script>

<style lang="sass" scoped>
@import '@/common/index'

.card
  width: 100%
  padding: 20px 30px 25px 30px
  background-color: $color-background

  &__header
    margin-bottom: 12px
    
  &__title
    font-family: $font-family-bold

  &__subtitle
    color: $color-text-base
    
  &__content
    display: flex
    justify-content: space-between

  &__content-left
    max-width: 85%

  &__list
    display: flex
    margin: 0 -5px

  &__item
    padding: 0 5px

  &__content-right
    justify-content: end
    
  &__date
    text-align: end
    margin-bottom: 18px
    margin-top: -5px
    color: #B4B7BB

  &__container-info
    display: flex

  &__comment
    color: #B4B7BB
    margin-right: 19px
    font-size: 13px
    line-height: 16px

    &::after
      content: url("../assets/images/comment.png")
      margin-left: 8px
      width: 17px

  &__rating
    color: #B4B7BB
    font-size: 13px
    line-height: 16px

    &::after
      content: url("../assets/images/starRating.png")
      margin-left: 8px
      width: 17px

</style>
