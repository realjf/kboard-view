<style scoped>

</style>

<template>
  <CommonLayout>
    <span slot="content">
      这是首页
      <Price></Price>
    </span>
  </CommonLayout>
</template>

<script>

  import CommonLayout from "../components/CommonLayout";
  import Price from "../components/common/Price";
  export default {
    name: "Home",
      data () {
          return {
              pageTitle: "首页"
          }
      },
      mounted() {
        this.$parent.$el['pageTitle'] = "首页";
      },
    components: {Price, CommonLayout},
  }
</script>
