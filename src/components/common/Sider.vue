<template>
    <Row>
      <MenuTab></MenuTab>
    </Row>
</template>

<script>
    import MenuTab from "./MenuTab";
    export default {
        name: "Sider",
        components: {MenuTab},
        data () {
          return {

          }
        },
    }
</script>

<style scoped>
  ul.ivu-menu.ivu-menu-vertical.ivu-menu-light {
    width: 200px;
    top: 60px;
  }
  div.ivu-drawer.ivu-drawer-left {
    left: 60px;
    top: 60px;
  }
</style>
