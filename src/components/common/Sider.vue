<template>
    <Row>
      <Button @mouseenter.native="showProduct()" icon="ios-power" type="default" :style="{left: '0', width: '40px', lineHeight: '40px', height: '100%', marginTop: '5px', borderBottom: '2px solid #2d8cf0'}">产品与服务</Button>
      <Drawer title="产品与服务" placement="left" :closable="false" v-model="showPro">
          <Menu>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-nuclear" size="20"/>
                镜像仓库
              </template>
              <MenuItem name="1-1">公共镜像</MenuItem>
              <MenuItem name="1-2">团队镜像</MenuItem>
              <MenuItem name="1-3">私有镜像</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people" size="20" />
                用户管理
              </template>

              <MenuItem name="2-1">用户</MenuItem>
              <MenuItem name="2-2">团队</MenuItem>
              <MenuItem name="2-3">角色</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-speedometer" size="20" />
                日志监控
              </template>
              <MenuGroup title="日志">
                <MenuItem name="3-1" to="/log">错误日志</MenuItem>
                <MenuItem name="3-2">kibana日志</MenuItem>
              </MenuGroup>
              <MenuGroup title="监控">
                <MenuItem name="3-3">集群监控</MenuItem>
              </MenuGroup>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-cloud-done" size="20" />
                云存储
              </template>
              <menuGroup title="数据库">
                <MenuItem name="4-1">云数据库 mysql版</MenuItem>
                <MenuItem name="4-2">云数据库 redis版</MenuItem>
              </menuGroup>
              <menuGroup title="云存储">
                <MenuItem name="4-3">RBD 块存储</MenuItem>
                <MenuItem name="4-4">对象存储</MenuItem>
                <MenuItem name="4-5">文件存储</MenuItem>
              </menuGroup>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-star" size="20" />
                云市场
              </template>
              <MenuItem name="5-1" to="/ns">云主机</MenuItem>
            </Submenu>
            <Submenu name="6">
              <template slot="title">
                <Icon type="ios-infinite" />
                负载均衡
              </template>
              <MenuItem name="6-1">边缘路由</MenuItem>
              <MenuItem name="6-2">ingress控制器</MenuItem>
            </Submenu>
          </Menu>
      </Drawer>
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
      </Menu>
    </Row>
</template>

<script>
    export default {
        name: "Sider",
        components: {},
        data () {
          return {
              theme2: 'light',
              showPro: false
          }
        },
        methods: {
            showProduct: function () {
                this.showPro = !this.showPro
            }
        }
    }
</script>

<style scoped>
  div.ivu-drawer.ivu-drawer-left {
    left: 60px;
    top: 60px;
  }
</style>
