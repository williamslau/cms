<template>
    <div>
        <Tabs type="card">
            <TabPane label="书籍详情">
                <bookDetails></bookDetails>
            </TabPane>
            <TabPane label="章节目录">
                <chapter></chapter>
            </TabPane>
            <TabPane label="合同信息">
                <contarce></contarce>
            </TabPane>
            <TabPane label="操作日志">
                <journal></journal>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import bookDetails from './bookDetails.vue'
    import chapter from './chapter.vue'
    import contarce from './contarce.vue'
    import journal from './journal.vue'
    export default {
        components:{
            bookDetails,
            chapter,
            contarce,
            journal
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