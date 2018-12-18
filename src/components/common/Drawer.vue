<template>
    <Button @click="value2 = true" type="primary">Open</Button>
    <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
</template>
<script>
    export default {
        name: "Drawer",
        data () {
            return {
                value2: false
            }
        }
    }
</script>

<style scoped>

</style>