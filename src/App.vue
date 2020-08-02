<!--  -->
<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import { reqAddress, reqFoodTypes } from './api';
  export default {
    data () {
      return {
      };
    },
    mounted() {
      this.$store.dispatch("getAddress")
    },
    components:{
      FooterGuide
    }
  }

</script>

<style scoped lang="stylus">
</style>
