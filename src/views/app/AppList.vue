<template>
    <CommonLayout>
        <SortTable slot="content">
        </SortTable>
        <Pager slot="pager"></Pager>
    </CommonLayout>
</template>

<script>
    import CommonLayout from "../../components/CommonLayout";
    import SortTable from "../../components/common/SortTable";
    import Pager from "../../components/common/Pager";
    export default {
        name: "AppList",
        components: {Pager, SortTable, CommonLayout},

    }
</script>

<style scoped>

</style>