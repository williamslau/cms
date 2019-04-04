<template>
    <div>
        <div>
            <Form>
                <Form-item>
                    <Button type="primary">增加</Button>
                </Form-item>
            </Form>
            <Table border :columns="columns" @on-selection-change="checkChangeFn" :data="data"></Table>
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
                tids:[],
                columns:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },{
                        title: '书名',
                        key: 'a'
                    },{
                        title: '作者',
                        key: 'a'
                    },{
                        title: '分类',
                        key: 'a'
                    },{
                        title: '状态',
                        key: 'a'
                    },{
                        title: '章节',
                        key: 'a'
                    },{
                        title: '来源',
                        key: 'a'
                    },{
                        title: '更新时间',
                        key: 'a'
                    },{
                        title: '操作',
                        width: 220,
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
                                }, '导入书单'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                            this.$router.push({path:'/platform/empower'});
                                        }
                                    }
                                }, '授权书籍'),
                            ]);
                        }
                    }
                ],
                data:[{
                    a:1
                }],
                pageTotal:0,
            }
        },
        methods:{
            checkChangeFn(e){
                this.tids=e.map(item=>item.tid);
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