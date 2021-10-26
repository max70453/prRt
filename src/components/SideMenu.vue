<template lang="pug">
	.side-menu
		ul.side-menu__list
			li( 
				v-for="(menuItem, index) in menu",
				ref="menu", @click="clickItem = index" v-scroll-to="menuItem.scroll",
				:style="menuItem.default" :class="{ 'active' : clickItem === index }" 
			).side-menu__item {{ menuItem.description }}
</template>

<script>
export default {
	data(){
		return {
			menu: [
				{ description: 'Краткое обучение', scroll: '#element-short' },
				{ description: 'Общая информация', scroll: '#element-general' },
				{ description: 'Видео-уроки', scroll: '#element-video' },
				{ description: 'Отзывы', scroll: '#element-review' }
			],
			clickItem: 0
		}
	}
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.side-menu

	&__list
		font-size: 15px
		line-height: 18px

	&__item
		width: 350px
		height: 54px
		padding: 18px 0 18px 30px
		cursor: pointer
		border-bottom: 1px solid #CDD3DB

		&:last-child
			border-bottom: none

		&:hover
			background-color: #fff
			font-family: $font-family-bold
			border-radius: 5px
			border-bottom: none

	.active
		background-color: #fff
		font-family: $font-family-bold

</style>