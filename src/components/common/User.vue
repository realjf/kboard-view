<template>
    <div class="user-info">
        <Dropdown>
            <a href="javascript:void(0)" :style="{ color: '#fff'}">
              hello <span>{{username}}</span>，欢迎您！
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>
                    <RouterLink to="/setting">设置</RouterLink>
                </DropdownItem>
                <DropdownItem>
                    <RouterLink to="/logout">退出</RouterLink>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    export default {
        name: "User",
        data () {
          return {
            username: this.$store.state.username,
          }
        },
      methods: {

      }
    }
</script>

<style scoped>
    div.user-info{
        display: inline-block;
        float: right;
        margin-left: 20px;
    }
</style>
