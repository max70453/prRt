<template lang='pug'>
  #app
    #nav
      //- router-link(to="/")
      //- router-link(to="/about")
    router-view
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="sass">
@import '@/common/index'
#app 
  font-family: $color-text-base
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

html
  background-color: $color-background-main

</style>


