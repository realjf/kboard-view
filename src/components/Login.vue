<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
    <FormItem prop="user">
      <div>
        <Input type="text" v-model="formInline.user" placeholder="邮箱">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </div>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="密码">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    name: "Login",
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度至少6个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
