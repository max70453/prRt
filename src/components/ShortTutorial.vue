<template lang="pug">
  .tutorial
    .tutorial__title {{ title }}
    p.tutorial__description
      | {{ descrTopText }}
    blockquote.tutorial__blockquote
      | {{ blocquote }}
    p.tutorial__description
      | {{ descrBotText }}
</template>

<script>
export default {
  data(){
    return{
      title: 'Краткое обучение',
      descrTopText: 'Банки все больше осознают важность риск-культуры как области, необходимой для эффективного управления рисками. Понимание риск-культуры развивалось от ее восприятия как необходимости выполнять требования регулятора в области рисков до сбалансированной системы, в центре которой находится оптимальное для организации соотношение риска и доходности, а если наклонить линию, то круг начинает скользить вниз и кажется, что тот, который справа, вот-вот упадёт»',
      blocquote: '«Понимание риск-культуры развивалось от ее восприятия как необходимости выполнять требования регулятора в области рисков до сбалансированной системы»',
      descrBotText: 'На ранней стадии я поймал себя на мысли, что большинство примеров — это простые сайты. Идея обычно соответствует следующему формату: «Посмотрите на эти линии и 2 окружности: если предположить, что это набор масштабов, то окружность, которая более удалена от центра, перевешивает, а если наклонить линию, то круг начинает скользить вниз и кажется, что тот, который справа, вот-вот упадёт».',
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.tutorial

  &__title
    color: $color-text-base
    font-family: $font-family-bold
    font-size: 35px
    line-height: 43px
    margin-bottom: 24px
  
  &__description
    color: $color-text-base
    font-size: 16px
    line-height: 29px
    margin-bottom: 20px

    &:last-child
      margin-bottom: 42px
    
  &__blockquote
    color: $color-shade-of-gray
    font-size: 24px
    line-height: 38px
    margin: 0
    padding: 0
    margin-bottom: 20px

    
</style>