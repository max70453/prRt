<template lang="pug">
  .tasks
    h1.tasks__title Мои задачи
    .tasks__content
      .tasks__col-left
        task-list
      .tasks__col-right
        task-filter
</template>

<script>
export default {
  components: {
    TaskList: () => import('@/components/TaskList.vue'),
    TaskFilter: () => import("@/components/TaskFilter.vue"),
  },
  data(){
    return {
     
    }  
  }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.tasks
  width: 100%

  &__content
    display: flex

  &__col-left
    width: 69%

  &__col-right
    padding-left: 50px

  &__title
    font-family: $font-family-bold
    font-size: 50px
    line-height: 37px
    margin-bottom: 43px
    
</style>

