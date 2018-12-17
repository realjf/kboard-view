<template>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
        <Step title="步骤1" content="这里是该步骤的描述信息"></Step>
        <Step title="步骤2" content="这里是该步骤的描述信息"></Step>
        <Step title="步骤3" content="这里是该步骤的描述信息"></Step>
        <Step title="步骤4" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <Button type="primary" @click="next">Next step</Button>
</template>

<script>
    export default {
        name: "Step",
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>

<style scoped>

</style>