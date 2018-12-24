<style scoped>

</style>

<template>
  <CommonLayout></CommonLayout>
</template>

<script>

  import CommonLayout from "./CommonLayout";
  export default {
    name: "Home",
    data () {
      return {
      }
    },
    methods: {
      initName: function() {
        let name = "";
        Vue.$api.api_user.user().then(resp =>{
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
