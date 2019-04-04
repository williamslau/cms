<template>
    <div>
        <div>
            <Form :model="formItem" :label-width="100" inline>
                <Form-item label="版权方名称">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="init">查询</Button>
                </Form-item>
            </Form>
            <Form inline>
                <Form-item>
                    <Button type="primary" @click="addCopyRight">新增版权</Button>
                </Form-item>
            </Form>
            <Table border :columns="columns" :data="data"></Table>
            <div class="clearfix page">
                <Page :total="pageTotal" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.start+1" placement="top" show-elevator show-sizer></Page>
            </div>
        </div>
        <router-view/>
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
                                            this.$router.push({path: '/copyRight/contract'});
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
                                            this.$router.push({path: '/copyRight/copyRightDetails'});
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
            addCopyRight(){
                this.$router.push({path:'/copyRight/addCopyRight'});
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