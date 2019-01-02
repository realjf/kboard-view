<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1" :style="{minWidth: '200px'}">
        <div :style="{ color: '#fff', display: 'inline-block', float: 'left', margin: '0', width: '240px'}">
            <Icon type="ios-cloud" size="30"></Icon>
            <span>Kubernetes Dashboard V1</span>
        </div>
        <MenuItem name="0" to="/">
            <Icon type="ios-home" size="20"/>首页
        </MenuItem>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people" size="20" />
                用户管理
            </template>
            <MenuItem name="2-1" to="/user/index">用户</MenuItem>
            <MenuItem name="2-2" to="/team/index">团队</MenuItem>
            <MenuItem name="2-3" to="/role/index">角色</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cloud-done" size="20" />
                云存储
            </template>
            <menuGroup title="数据库">
                <MenuItem name="3-1" to="/storage/mysql">云数据库 mysql版</MenuItem>
                <MenuItem name="3-2" to="/storage/redis">云数据库 redis版</MenuItem>
            </menuGroup>
            <menuGroup title="云存储">
                <MenuItem name="3-3" to="/storage/rbd">RBD 块存储</MenuItem>
                <MenuItem name="3-4" to="/storage/object">对象存储</MenuItem>
                <MenuItem name="3-5" to="/storage/file">文件存储</MenuItem>
            </menuGroup>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-apps" size="20" />
                云计算
            </template>
            <MenuItem name="4-1" to="/ns">云主机</MenuItem>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="ios-globe-outline" size="20"/>
                网络
            </template>
            <MenuItem name="5-1" to="/net/edge">边缘路由</MenuItem>
            <MenuItem name="5-2" to="/net/ingress">ingress控制器</MenuItem>
        </Submenu>
        <Submenu name="6">
            <template slot="title">
                <Icon type="ios-nuclear" size="20"/>
                镜像仓库
            </template>
            <MenuItem name="6-1" to="/image/public">公共镜像</MenuItem>
            <MenuItem name="6-2" to="/image/team">团队镜像</MenuItem>
            <MenuItem name="6-3" to="/image/private">私有镜像</MenuItem>
        </Submenu>
        <Submenu name="10">
            <template slot="title">
                <Icon type="ios-speedometer" size="20" />
                日志监控
            </template>
            <MenuGroup title="日志">
                <MenuItem name="10-1" to="/log">错误日志</MenuItem>
                <MenuItem name="10-2" to="">kibana日志</MenuItem>
            </MenuGroup>
            <MenuGroup title="监控">
                <MenuItem name="10-3" to="">集群监控</MenuItem>
            </MenuGroup>
        </Submenu>

        <Col>
            <User></User>
            <Submenu name="1" :style="{float: 'right'}">
                <template slot="title">
                    <Icon type="ios-card" size="20"/>
                    工单
                </template>
                <MenuItem name="1-1" to="/order">我的工单</MenuItem>
            </Submenu>
        </Col>

    </Menu>
</template>

<script>
    import User from "./User";
    export default {
        name: "Nav",
        components: {User},
        data () {
            return {
                theme1: 'primary'
            }
        }
    }
</script>

<style scoped>
  a.ivu-menu-item.ivu-menu-item-active {

  }
    a.ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected {
        color: #fff;
    }
    a.ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected:hover {
        color: #2d8cf0;
    }
</style>
