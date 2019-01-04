<template>
    <Row>
        <div style="padding: 10px;background: #f8f8f9">
            <Card title="工作负载" icon="ios-pulse" :padding="0" shadow style="width: 200px;">
                <CellGroup>
                    <Cell title="应用" to="/app/list" arrow=""></Cell>
                    <Cell title="服务" to="/service/list" arrow=""></Cell>
                </CellGroup>
            </Card>
            <CellItem></CellItem>
            <Card title="存储与配置" icon="ios-filing" :padding="0" shadow style="width: 200px;">
                <CellGroup>
                    <Cell title="持久存储卷" to="/" arrow=""></Cell>
                    <Cell title="密钥" to="/secret/list" arrow=""></Cell>
                    <Cell title="应用配置" to="/configmap/list" arrow=""></Cell>
                </CellGroup>
            </Card>
        </div>
    </Row>
</template>

<script>

    import CellItem from "iview/src/components/cell/cell-item";
    export default {
        name: "Sider",
        components: {CellItem},
        data () {
          return {

          }
        },
    }
</script>

<style scoped>

</style>
