<template lang="pug">
  .header 
    .header__container
      .header__logo
        img(src="@/assets/images/Path 1.png", alt="Логотип").header__logo-img
        .header__logo-txt Rtrack
      nav.header__nav
        ul.header__nav-list
          li(v-for="item in menu").header__nav-item
            template(v-if="item.subMenu && item.subMenu.length > 0")
              tooltipMenu
                .header__link(slot="target") {{item.label}}
                ProjectsMenu(slot="menu", :option="item.subMenu")
            template(v-else)
              a(:href="item.url").header__link {{ item.label }}
      .header__star
        img(src='@/assets/images/star.png').header__star-img
      .header__bell
        img(src='@/assets/images/bell.png').header__bell-img
      .header__avatar
        tooltipMenu
          .header__popover-images(slot="target")
            img(:src="require(`@/assets/images/${avatarImg}`)").header__img
          UserMenu(slot="menu")
            
</template>

<script>
export default {
  components: {
    tooltipMenu: () => import('@/components/TooltipMenu'),
    UserMenu:  () => import('@/components/UserMenu'),
    ProjectsMenu:  () => import('@/components/ProjectsMenu'),
},
  data(){
    return {
      menu: [
        {
          label: 'Проекты',
          subMenu: [
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'RS digital',
              is_favorite: true,
              my_tasks: 4,
              all_tasks: 5,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'Rocketware',
              is_favorite: true,
              my_tasks: 4,
              all_tasks: 12,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'Самообразование',
              is_favorite: true,
              my_tasks: 0,
              all_tasks: 10,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'Mecto.ru',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 45,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'Travel-promo',
              is_favorite: false,
              my_tasks: 22,
              all_tasks: 8,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'B2B оружие',
              is_favorite: false,
              my_tasks: 9,
              all_tasks: 30,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
            {
              imgFill: 'navStar.png',
              imgBlanc: 'navStarLight.png',
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
          ],
        },
        {
          label: 'Задачи для меня',
          url: '#',
        },
        {
          label: 'База знаний',
          url: '#',
        },
        {
          label: 'Все задачи',
          url: '#',
        },
        {
          label: 'Просмотренные',
          url: '#',
        },
      ],
      avatarImg: 'ali-morshedlou.png',
    }
  }
  }
 
</script>

<style scoped lang="sass">
@import '@/common/index'

.header
  padding: 27px 0
  width: 100%
  background-color: white
  margin-bottom: 64px
    
  &__container
    margin: 0 auto
    width: calc(100% - 172px)
    display: flex
    align-items: center

  &__logo
    display: flex
    align-items: center
    margin-right: 60px

  &__logo-img
    max-width: 100%
    height: 30px
    margin-right: 15px

  &__logo-txt
    color: $color-text-base
    font-family: $font-family-bold
    font-size: 22px
    line-height: 27px
    
  &__nav
    margin-right: auto

  &__title
    cursor: pointer

  &__nav-list
    display: flex
    align-items: center
    margin: 0 -17.5px

  &__nav-item
    padding: 0 17.5px
    display: flex
    align-items: center
    justify-content: center

  &__link
    font-size: 14px
    line-height: 17px
    color: $color-text-base
    cursor: pointer

  &__star
    width: 25px
    height: 22px
    margin-right: 23px
  
  &__bell
    width: 20px
    height: 24px
    margin-right: 26px

  &__avatar
    cursor: pointer
  
  &__popover-images
    display: flex
    align-items: center
    justify-content: center

  &__img
    border-radius: 50%
    margin-right: 8px
      
</style>

