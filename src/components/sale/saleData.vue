<template>
    <div>
        <Tabs type="card">
            <TabPane label="累计数据">
                <div>
                    <Form :label-width="100">
                        <Form-item label="平台">
                            <RadioGroup>
                                <Radio label="1">瑞信</Radio>
                                <Radio label="2">极致阅</Radio>
                            </RadioGroup>
                        </Form-item>
                    </Form>
                    <Form :model="formItem" :label-width="100" inline>
                        <Form-item label="分类">
                            <Select v-model="formItem.name" style="width:200px">
                                <Option value="">请选择</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="频道">
                            <Select v-model="formItem.name" style="width:200px">
                                <Option value="">请选择</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="书名/站点">
                            <Input type="text" v-model="formItem.name"></Input>
                        </Form-item>
                        <Form-item>
                            <Button type="primary" @click="init">查询</Button>
                        </Form-item>
                    </Form>
                    <Table border :columns="columns" :data="data"></Table>
                    <div class="clearfix page">
                        <Page :total="pageTotal" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.start+1" placement="top" show-elevator show-sizer></Page>
                    </div>
                </div>
            </TabPane>
            <TabPane label="月数据">
                <div>
                    <Form :label-width="100">
                        <Form-item label="平台">
                            <RadioGroup>
                                <Radio label="1">瑞信</Radio>
                                <Radio label="2">极致阅</Radio>
                            </RadioGroup>
                        </Form-item>
                    </Form>
                    <Form :model="formItem" :label-width="100" inline>
                        <Form-item label="频道">
                            <Select v-model="formItem.name" style="width:200px">
                                <Option value="">请选择</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="分类">
                            <Select v-model="formItem.name" style="width:200px">
                                <Option value="">请选择</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="分类">
                            <DatePicker type="datetimerange" placeholder="请选择日期" style="width: 300px"></DatePicker>
                        </Form-item>
                        <Form-item label="书名/站点">
                            <Input type="text" v-model="formItem.name"></Input>
                        </Form-item>
                        <Form-item>
                            <Button type="primary" @click="init">查询</Button>
                        </Form-item>
                    </Form>
                    <Table border :columns="columns" :data="data"></Table>
                    <div class="clearfix page">
                        <Page :total="pageTotal" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.start+1" placement="top" show-elevator show-sizer></Page>
                    </div>
                </div>
            </TabPane>
        </Tabs>
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
                        title: '编号',
                        key: 'wname'
                    },{
                        title: '版权类型',
                        key: 'tasknumber'
                    },{
                        title: '版权方简称',
                        key: 'stid'
                    },{
                        title: '授权书数量',
                        key: 'sname'
                    },{
                        title: '创建时间',
                        key: 'city'
                    }
                    ,{
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
                                        }
                                    }
                                }, '版权合同'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                        }
                                    }
                                }, '版权方信息'),
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
<style scoped>
    .layout-content{
        margin-top:0!important;
    }
    .ivu-tabs-bar{
        margin-bottom:0!important;
    }
</style>