<template>
    <div>
        <div>
            <Form :model="formItem" :label-width="100" inline>
                <Form-item label="开始时间">
                    <DatePicker type="date" style="width: 200px"></DatePicker>
                </Form-item>
                <Form-item label="到期时间">
                    <DatePicker type="date" style="width: 200px"></DatePicker>
                </Form-item>
                <Form-item label="合同编号">
                    <Input type="text" v-model="formItem.name"/>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="init">查询</Button>
                </Form-item>
            </Form>
            <Form inline>
                <Form-item>
                    <Button type="primary" @click="addContract">添加合同</Button>
                </Form-item>
            </Form>
            <Table border :columns="columns" :data="data"></Table>
            <div class="clearfix page">
                <Page :total="pageTotal" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.start+1" placement="top" show-elevator show-sizer></Page>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                formItem:{
                    name:'',
                    start:0,
                    length:10,
                },
                columns:[
                    {
                        title: '合同名称',
                        key: 'wname'
                    },{
                        title: '合同编号',
                        key: 'tasknumber'
                    },{
                        title: '开始时间',
                        key: 'stid'
                    },{
                        title: '到期时间',
                        key: 'sname'
                    },{
                        title: '操作',
                        width: 260,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                        }
                                    }
                                }, '导出书单'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                            this.$router.push({path:'/copyRight/contract/contractDetails'});
                                        }
                                    }
                                }, '合同详情'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                            this.$router.push({path:'/copyRight/contract/bookListDetails'});
                                        }
                                    }
                                }, '书单明细'),
                            ]);
                        }
                    }
                ],
                data:[{
                    wname:1,
                    tasknumber:1,
                    sname:1,
                    city:1
                }],
                pageTotal:0,
            }
        },
        methods:{
            addContract(){
                this.$router.push({path:'/copyRight/contract/addContract'});
            },
            pageChange(res){
                this.formItem.start=res-1;
            },
            pageSize(res){
                this.formItem.length=res;
            },
            init(){

            }
        },
    }
</script>