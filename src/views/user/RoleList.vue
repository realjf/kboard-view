<template>
    <CommonLayout>
        <div slot="content">
            <Table :columns="columns" :data="roleListData" size="small" ref="roleList"></Table>
            <Pager></Pager>
        </div>
    </CommonLayout>
</template>

<script>
    import CommonLayout from "../../components/CommonLayout";
    import Pager from "../../components/common/Pager";
    export default {
        name: "RoleList",
        components: {Pager, CommonLayout},
        data () {
            return {
                columns: [
                    {
                        "title": "序号",
                        "key": "id",
                        "width": 100,
                        "align": "center",
                    },
                    {
                        "title": "角色名称",
                        "key": "name",
                        "align": "center",
                    },
                    {
                        "title": "角色权限",
                        "key": "group",
                        "align": "center",
                    },
                    {
                        "title": "操作",
                        "key": "action",
                        "align": "center",
                    },
                ],
                roleListData: [
                ]
            }
        }
    }
</script>

<style scoped>

</style>