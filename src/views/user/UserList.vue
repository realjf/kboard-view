<template>
    <CommonLayout>
        <div slot="content">
            <Table size="small" :columns="columns" :data="userListData" ref="userList" :border="true" :stripe="true"></Table>
        </div>
    </CommonLayout>
</template>

<script>
    import CommonLayout from "../../components/CommonLayout";
    export default {
        name: "UserList",
        components: {CommonLayout},
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
                        "title": "用户名",
                        "key": "name",
                        "align": "center",
                    },
                    {
                        "title": "分组",
                        "key": "group",
                        "align": "center",
                    },
                    {
                        "title": "操作",
                        "key": "action",
                        "align": "center",
                    },
                ],
                userListData: [
                ],
            }
        }
    }
</script>

<style scoped>

</style>