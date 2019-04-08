<template>
    <div>
        <Tabs type="card">
            <TabPane label="累计数据">
                <allData></allData>
            </TabPane>
            <TabPane label="月数据">
                <mountData></mountData>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import allData from './allData.vue';
    import mountData from './mountData.vue'
    export default {
        components:{
            allData,
            mountData
        }
    }
</script>
<style scoped>
    .layout-content{
        margin-top:0!important;
    }
    .ivu-tabs-bar{
        margin-bottom:0!important;
    }
</style>