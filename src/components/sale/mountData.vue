<template>
    <div>
        <Form :label-width="100">
            <Form-item label="平台">
                <platform :formItem="formItem"></platform>
            </Form-item>
        </Form>
        <Form :model="formItem" :label-width="100" inline>
            <Form-item label="月份">
                <DatePicker @on-change="formItem.date=$event" v-model="formItem.date" format="yyyy-MM" placeholder="请选择月份" type="month"></DatePicker>
            </Form-item>
            <gender :formItem="formItem"></gender>
            <Form-item>
                <Button type="primary" @click="init">查询</Button>
            </Form-item>
        </Form>
        <Table border :columns="columns" :data="data"></Table>
        <div class="clearfix page">
            <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
        </div>
    </div>
</template>
<script>
    import formMod from '../formMod';
    export default {
        data(){
            return{
                formItem:{
                    product_id:'',
                    date:'',
                    gender_id:'',
                    cate_id:'',
                    keywords:'',
                    page:1,
                    limit:10,
                },
                columns:[
                    {
                        title: 'ID',
                        key: 'id'
                    },{
                        title: '书名',
                        key: 'title'
                    },{
                        title: '分类',
                        key: 'cate_id'
                    },{
                        title: '来源',
                        key: 'site'
                    },{
                        title: '总消费',
                        key: 'total_consume'
                    },{
                        title: '总消费人数',
                        key: 'total_num'
                    },{
                        title: '总人均消费',
                        key: 'total_avg_consume'
                    },{
                        title: '实际消费',
                        key: 'actual_consume'
                    },{
                        title: '实际消费人数',
                        key: 'actual_num'
                    },{
                        title: '实际人均消费',
                        key: 'actual_avg_consume'
                    }
                ],
                data:[],
                total:0,
            }
        },
        watch:{
			'formItem.product_id':function(){
                this.getData();
			},
		},
        methods:{
            getData(){
                this.$http.get('/api/stats/sales/month',{
                    params:this.formItem
                }).then( res => {
                    this.data=res.data.list;
                    this.total=res.data.total;
                })
            },
            pageChange(res){
                this.formItem.page=res;
                this.getData();
            },
            pageSize(res){
                this.formItem.limit=res;
                this.getData();
            },
            init(){
                this.formItem.page=1;
                this.getData();
            }
        },
        components:{
            platform:formMod.platform,
            gender:formMod.gender,
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