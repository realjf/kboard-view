<template>
    <div class="user-info">
        <Dropdown>
            <a href="javascript:void(0)" :style="{ color: '#fff'}">
              hello <span>{{username}}</span>，欢迎您！
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>设置</DropdownItem>
                <DropdownItem><routerLink to="/logout">退出</routerLink></DropdownItem>
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
        initName: function () {
          let name = "";
          this.$api.api_user.user().then(resp =>{
            console.log(resp.result.name);
            name = resp.result.name;
          }).catch(()=>{
            console.log()
          });
          return name;
        }
      }
    }
</script>

<style scoped>
    div.user-info{
        display: inline-block;
        float: right;
    }
</style>
