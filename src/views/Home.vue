<style scoped>

</style>

<template>
  <CommonLayout>
    <span slot="content">
      这是首页
    </span>
  </CommonLayout>
</template>

<script>

  import CommonLayout from "../components/CommonLayout";
  export default {
    name: "Home",
    data () {
      return {
      }
    },
    methods: {
      initName: function() {
        let name = "";
        this.$api.api_user.user().then(resp =>{
          console.log(resp.result.name);
          name = resp.result.name;
        }).catch(()=>{
          console.log()
        });
        return name;
      }
    },
    components: {CommonLayout},
  }
</script>
