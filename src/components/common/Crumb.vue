<template>
    <Breadcrumb>
        <BreadcrumbItem to="/"> Home </BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb"> Components </BreadcrumbItem>
        <BreadcrumbItem> Breadcrumb </BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
    export default {
        name: "Crumb"
    }
</script>

<style scoped>
    .ivu-breadcrumb {
        height: 60px;
        text-align: left;
    }
    .ivu-breadcrumb span{
        line-height: 60px;
    }
</style>
