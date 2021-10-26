<template lang="pug">
  .general-info
    .general-info__title {{ title }}
    .general-info__description {{ description }}
    img(:src="require('@/assets/images/' + img)", alt="workplace").general-info__img
    .general-info__img-descr {{ imgDescr }}
    .general-info__what-tasks 
      .general-info__title-tasks {{ titleTasks }}
      ul.general-info__list
        li(v-for="item in generalInfoItems").general-info__item  
          .general-info__text {{ item }}
    .general-info__whatIsIt
      .general-info__title-what {{ titleWhat }}
      ol.general-info__what-list
        li(v-for="(item, index) in whatItems").general-info__what-item {{ item }}

</template>

<script>
export default {
  data(){
    return{
      title: 'Общая информация',
      description: 'Если ранее бизнес рассматривал риск-подразделения как сдерживающий фактор развития, то сейчас они выступают в роли партнеров. Формальными правилами достичь такого результата вряд ли возможно, требуется соответствующая корпоративная культура.',
      img: 'generalInfo.jpg',
      imgDescr: 'Риск-культура - это устоявшиеся нормы поведения сотрудников, направленные на выявление рисков и управление ими. ',
      titleTasks: 'Какие могут быть задачи у данного решения:',
      generalInfoItems: [
        'Сформировать у линейных руководителей набор управленческих знаний и навыков, необходимых для эффективного выполнения ими своих обязанностей в соответствии со стратегией Банка и корпоративной моделью компетенций;',
        'Сформировать мотивацию к дальнейшему развитию;',
        'Выявить высоко-потенциальных руководителей Банка для дальнейшего карьерного развития.'
      ],
      titleWhat: 'Для чего это нужно?',
      whatItems: [
        'Команда и управление людьми;',
        'Побуждение, мотивирование подчиненных и коллег к участию в улучшениях;',
        'Эффективное управление людьми;',
        'Определение факторов, влияющих на вовлеченность в коллективе использование управленческих инструментов / рычагов влияния на эти факторы; подбор адекватных / убедительных тезисов и аргументов для различных целевых аудиторий влияния; воодушевление людей в личном общении;',
        'Построение эффективных команд, лидерство и личная эффективность;',
        'Принятие на себя лидерства и выбор стиля лидерства;',
        'Фиксация и анализ своих эмоций с целью повышения эффективности профессиональной деятельности;',
        'Навык постоянного личностного развития,'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.general-info
  
  &__title
    color: $color-text-base
    font-family: $font-family-bold
    font-size: 25px
    line-height: 31px
    margin-bottom: 26px

  &__description
    color: $color-text-base
    font-size: 17px
    line-height: 29px
    margin-bottom: 36px

  &__img
    width: 100%
    height: auto
    background: linear-gradient(262.57deg, #DCC9C9 18.75%, #77655A 85.28%)
    mix-blend-mode: hard-light
    opacity: 0.75
    border-radius: 5px
  
  &__img-descr
    background-color: $color-background
    width: 100%
    height: 74px
    border-radius: 5px
    text-align: center
    padding: 14px 15px
    font-size: 14px
    line-height: 21px
    margin-bottom: 33px

  &__what-tasks
    
  &__title-tasks
    font-family: $font-family-bold
    font-size: 17px
    line-height: 28px
    margin-bottom: 14px

  &__list
    margin-bottom: 37px
   
  &__item
    line-height: 29px
    color: $color-text-base
    margin-bottom: 19px
    position: relative

    &::before
      position: absolute
      display: block
      content: "\2013"

  &__text
    font-size: $font-size-base
    line-height: 24px
    padding-left: 35px
    display: inline-block
    width: calc(100% - 50px)
 
  &__whatIsIt
  
  &__title-what
    color: $color-text-base
    font-family: $font-family-bold
    font-size: 25px
    line-height: 30px
    margin-bottom: 25px

  &__what-list
    list-style-type: dash
    margin-bottom: 45px

  &__what-item
    color: $color-text-base
    font-size: 17px
    line-height: 29px
    padding-left: 26px

</style>