<template lang="pug">
  .multi-select
    Multiselect(
      v-model="value",
      ref="multiselect",
      :placeholder="value ? value : 'Empty'",
      mode="single",
      :caret="false",
      :options="status.text",
      :canClear="false",
      ).multi-select__select
      //- template( v-slot:option="{ option }" )
      //-   img(:src="require(`../assets/images/${option.icon}`)").character-label-icon
    
</template>

<script>
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
export default {
  props: ['status'], 
  components: {
    Multiselect
  },
  data(){
    return{
      value: null
    } 
  },
  computed:{
    // getChangeStyle(){
      // return document.querySelectorAll('.multiselect');
    // }
  },
  mounted()
  {
    // this.$refs.multiselect.$el.style.color = this.status.colorText;
    // this.$refs.multiselect.$el.children[0].style.color = this.status.colorText; //задает цвет placeholder
    // this.$refs.multiselect.$el.children[0].style.paddingLeft = this.status.styleObject.paddingLeft

    //задает размер шрифта тексту options
    // let children = this.$refs.multiselect.$el.children[1].children[0].children;
    // for(let i = 0; i < children.length; i++)
    //   children[i].style.fontSize = '13px';

    //задает цвет фона выбр option
    // let children = this.$refs.multiselect.$el.children[1].children[0].children;
    // for(let i = 0; i < children.length; i++)
    //   children[i].style.fontSize = '13px';

  // if(this.$refs.multiselect.$el.classList.contains('multiselect-clear'))
  //   console.log(this);

  // console.log(this.$refs.multiselect.HTMLCollection.namedItem());
  // let coll = this.$refs.multiselect
  // console.log(coll.document.querySelector('multiselect-placeholder'));


    // this.$refs.multiselect.$vnode.data.staticClass = '.multi-select'
    
    // this.value = this.$refs.multiselect.$vnode.context.placeholder = 'xcdsgfxcdf';
    // console.log(this.$refs.multiselect.$el.style.backgroundColor = this.status.colorText);
    // this.$refs.multiselect.$el.style.background = this.status.colorBg;
    // this.$refs.multiselect.$el.style.textolor = this.status.colorIcon;
    // console.log(this.status);
    // this.customStyle = this.getChangeStyle
  //   this.$nextTick( () => {  
  //       for (let i = 0; i < this.status.length; i++) {
  //         if(this.status[i].id === 1){
  //           this.value = this.status[i].text[i]
  //           this.options = this.status[i].text
  //           this.styles = this.status[i].styleObject

  //           this.$children[i].$refs.multiselect.style.color = this.status[i].colorText
  //         }
  //       }

  //       for (let i = 0; i < this.status.length; i++) {
  //         if(this.status[i].id === 2){
  //           this.value = this.status[i].text[i]
  //           this.options = this.status[i].text
  //           this.styles = this.status[i].styleObject

  //           this.$children[i].$refs.multiselect.style.color = this.status[i].colorText
  //         }
  //       }

  //       for (let i = 0; i < this.status.length; i++) {
  //         if(this.status[i].id === 3){
  //           this.value = this.status[i].text[i]
  //           this.options = this.status[i].text
  //           this.styles = this.status[i].styleObject

  //           this.$children[i].$refs.multiselect.style.color = this.status[i].colorText
  //         }
  //       }

  //       for (let i = 0; i < this.status.length; i++) {
  //         if(this.status[i].id === 4){
  //           this.value = this.status[i].placeholder.placeholder
  //           this.options = this.status[i].text

  //           this.$children[i].$refs.multiselect.style.color = this.status[i].colorText
  //         }
  //       }

  //       for (let i = 0; i < this.status.length; i++) {
  //         if(this.status[i].id === 5){
  //           this.value = this.status[i].placeholder.placeholder
  //           this.options = this.status[i].text

  //           this.$children[i].$refs.multiselect.style.color = this.status[i].colorText
  //         }
  //       }
  //   })
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.multi-select
  width: 225px
  
  &__select
    padding-left: 48px

.multiselect 
  padding-right: 7px

::v-deep .multi-select
  border: 2px solid red
  // &::after
  //   content: url('../assets/images/aroww.png')
  //   filter: invert(1)

</style>

<style src="@vueform/multiselect/themes/default.css"></style>