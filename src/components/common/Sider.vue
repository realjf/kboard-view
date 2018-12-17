<template>
    <Row>
      <Col span="1">
        <Menu :theme="theme2">
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-pulse" />
              工作负载
            </template>
            <MenuItem name="1-1">应用</MenuItem>
            <MenuItem name="1-2">服务</MenuItem>
            <MenuItem name="1-3">共享</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing" />
              存储与配置
            </template>
            <MenuItem name="2-1">持久存储卷</MenuItem>
            <MenuItem name="2-2">密钥</MenuItem>
            <MenuItem name="2-3">应用配置</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              服务发现与负载均衡
            </template>
            <MenuItem name="3-1">边缘路由</MenuItem>
            <MenuItem name="3-2">ingress控制器</MenuItem>
          </Submenu>
        </Menu>
      </Col>
    </Row>
</template>

<script>
    export default {
        name: "Sider",
        components: {},
        data () {
          return {
              theme2: 'light'
          }
        }
    }
</script>

<style scoped>
  .ivu-row {
    /*border-top: 2px solid #2d8cf0;*/
  }
</style>
