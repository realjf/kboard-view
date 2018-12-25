<template>
    <div class="menu-drawer">
        <Tabs type="card" :style="{width: '240px', margin: '10px 0 10px 0'}">
            <TabPane label="工作台" icon="ios-power">
                <Menu :theme="theme2">
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-pulse" size="20" />
                            工作负载
                        </template>
                        <MenuItem name="1-1">应用</MenuItem>
                        <MenuItem name="1-2">服务</MenuItem>
                        <MenuItem name="1-3">共享</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-filing" size="20" />
                            存储与配置
                        </template>
                        <MenuItem name="2-1">持久存储卷</MenuItem>
                        <MenuItem name="2-2">密钥</MenuItem>
                        <MenuItem name="2-3">应用配置</MenuItem>
                    </Submenu>
                </Menu>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "MenuTab",
        data() {
            return {
                theme2: 'light',
            }
        }
    }
</script>

<style scoped>
    div.menu-drawer {

    }
</style>