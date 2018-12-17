<template>
    <Row>
      <Col span="1">
        <Menu>
          <MenuItem name="0">
            <Icon type="ios-home" size="20"/>
            <routerLink to="/">首页</routerLink>
          </MenuItem>
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
              <MenuItem name="3-1">错误日志</MenuItem>
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
        </Menu>
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
