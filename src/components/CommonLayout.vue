<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    div.ivu-layout-header{
        background: #2d8cf0;
        padding: 0 20px 0 0;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)', borderBottom: '2px solid #2b85e4'}">
                <Nav></Nav>
            </Header>
            <Layout>
                <Sider></Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Crumb></Crumb>
                    <Content :style="{padding: '24px', minHeight: '760px', background: '#fff'}">
                    </Content>
                    <Pager></Pager>
                </Layout>
            </Layout>
        </Layout>
        <GoTop></GoTop>
    </div>
</template>

<script>

    import Sider from "./common/Sider";
    import Crumb from "./common/Crumb";
    import Pager from "./common/Pager";
    import Nav from "./common/Nav";
    import GoTop from "./common/GoTop";

    export default {
        name: "CommonLayout",
        components: {GoTop, Nav, Pager, Crumb, Sider},
        data () {
          return {
          }
        },
    }
</script>
