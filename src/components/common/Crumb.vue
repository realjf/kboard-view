<template>
    <Breadcrumb>
        <BreadcrumbItem to="/"> Home </BreadcrumbItem>
        <BreadcrumbItem :to="moduleUrl"> <slot name="module"></slot> </BreadcrumbItem>
        <BreadcrumbItem :to="actionUrl"> <slot name="action"></slot> </BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
    export default {
        name: "Crumb",
        data () {
            return {
                moduleUrl: "/login",
                actionUrl: "",
            }
        }
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
