<template lang="pug">
  .filter
    .filter__content
      .filter__header
        span.filter__title Сортировать:
        .filter__sort-method
          a(href="#").filter__link по дате
        img(src="@/assets/images/sort.png").filter__sort-img
      .filter__content
        ul.filter__list
          li(v-for="item in select").filter__item 
            Select(:status="item", :styleObjects="styleObject")
    .filter__button
      TaskButton(:text="'Очистить фильтр'")
</template>

<script>
export default {
  components: {
    TaskButton: () => import("@/components/TaskButton.vue"),
    Select: () => import("@/components/Select.vue"),
  },
  data(){
    return{
      styleObject:{
        width: '310px',
        fontSize: '13px',
        'min-height': '52px',
        'box-shadow': 'none'
      },
      select: 
      [
        // [
          {
            id: 1, 
            text: ['Проект'],
            placeholder: {placeholder: 'Проект'},
            colorIcon: '#32C979',
            colorText: '#93979B',
          },
        // ],
        // [
          {
            id: 2, 
            text: ['Статус'],
            placeholder: {placeholder: 'Статус'},
            colorIcon: '#32C979',
            colorText: '#93979B',
          },
        // ],
        // [
          {
            id: 3, 
            text: ['Приоритет'],
            placeholder: {placeholder: 'Приоритет'},
            colorIcon: '#32C979',
            colorText: '#93979B',
          },
        // ],
        // [
          {
            id: 4, 
            text: ['Автор'],
            placeholder: {placeholder: 'Автор'},
            colorIcon: '#32C979',
            colorText: '#93979B',
          },
        // ],
        // [
          {
            id: 5, 
            text: ['Участие'],
            placeholder: {placeholder: 'Участие'},
            colorIcon: '#32C979',
            colorText: '#93979B',
          }
        // ]
      ]
    }  
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.multiselect
  height: 52px

.filter
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  &__button
    width: 100%

  &__content
    background-color: $color-background
    margin-bottom: 20px
    padding: 28px 20px
    border-radius: 5px

  &__list

  &__item
    margin-bottom: 15px
    width: 310px
    height: 52px

  &__header
    border-bottom: 1px solid #E0E4E9
    display: flex
    align-items: center
    padding-bottom: 29px

  &__title
    margin-right: 5px
    font-size: 14px
    line-height: 17px
    color: $color-text-base

  &__sort-method
    border-bottom: 1px solid #93979B
    padding: 0

  &__link
    color: #93979B
    font-size: 14px
    line-height: 17px
    color: #93979B

  &__sort-img
    margin-left: auto
    cursor: pointer

  &__content
    padding: 30px 20px 20px 20px

  &__select
    width: 310px
    margin-bottom: 15px
    height: 52px

    &:last-child
      margin-bottom: 0

</style>