<!--  -->
<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    data () {
      return {
      };
    },
    components:{
      FooterGuide
    }
  }

</script>

<style scoped lang="stylus">
</style>
