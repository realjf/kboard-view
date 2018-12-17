<template>
    <div class="user-info">
        <Dropdown>
            <a href="javascript:void(0)" :style="{ color: '#fff'}">
                hello，欢迎您！
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>设置</DropdownItem>
                <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>
    div.user-info{
        display: inline-block;
        float: right;
    }
</style>