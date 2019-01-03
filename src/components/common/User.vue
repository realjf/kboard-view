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
            username: "",
          }
        },
        methods: {

        },
        mounted () {
            let params = {};
            this.$api.api_user.list(params).then(
                res => {
                    if(res.code == 100){
                        this.username = res.result.name
                    }
                    console.log(res);
                }).catch(error => {
                    console.log(error)
            })
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
