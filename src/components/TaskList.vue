<template lang="pug">
  .task-list
    ul.task-list__items
      li(v-for="n in 5").task-list__item
        TaskCard.task-list__card
    .task-list__button
      TaskButton(:text="'Загрузить еще'")
</template>

<script>
export default {
  components: {
    TaskCard: () => import("@/components/TaskCard.vue"),
    TaskButton: () => import("@/components/TaskButton.vue"),
  },
  data() {
    return {
      date: '06.05.2020', 
      comment: 0, 
      rating: 2,
      options: 
      [
        [
          { 
            id: 1, 
            icon: 'status.png', 
            text: ['В работе', 'Новый'], 
            colors: {
              colorIcon: '#32C979', 
              colorBg: '#D9F5E6'
              }
          },
          { 
            id: 2, 
            icon: 'status.png', 
            text: 'Новый',
            colors: {
              colorIcon: '#32C979', 
              colorBg: '#D9F5E6'
              }
          },
          { 
            id: 3, 
            icon: 'status.png', 
            text: 'Время',
            colors: {
              colorIcon: '#32C979', 
              colorBg: '#D9F5E6'
              }
          },
        ],
        // [
        //   { 
        //     id: 1, 
        //     icon: 'name.png', 
        //     text: 'Константин Серг', 
        //     colors: { colorIcon: '#0066FF', colorText: '#93979B', colorBg: '#F1F3F5'}, 
        //     comment: 0, 
        //     rating: 2 
        //   },
        //   { 
        //     id: 2, 
        //     icon: 'name.png', 
        //     text: 'Константин Серг', 
        //     colors: { colorIcon: '#0066FF', colorText: '#93979B', colorBg: '#F1F3F5'}, 
        //     comment: 0, 
        //     rating: 2 
        //   },
        //   { 
        //     id: 3, 
        //     icon: 'name.png', 
        //     text: 'Константин Серг', 
        //     colors: { colorIcon: '#0066FF', colorText: '#93979B', colorBg: '#F1F3F5'}, 
        //     comment: 0, 
        //     rating: 2 
        //   }
        // ],
        // [{ id: 3, 
        //   icon: 'priority.png', 
        //   text: 'Максимум', 
        //   colors: {colorIcon: '#FF8330', colorBg: '#F9E6D9'}, 
        //   comment: 0, rating: 2 }],
      ]
    }
  },
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.task-list
  width: 100%

  &__items
    margin-bottom: 20px

  &__item

  &__card
    margin-bottom: 2px

  &__button
    margin-bottom: 69px

</style>

<style src="@vueform/multiselect/themes/default.css"></style>