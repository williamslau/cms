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
                        title: '用户名',
                        key: 'a'
                    },{
                        title: '姓名',
                        key: 'a'
                    },{
                        title: '部门',
                        key: 'a'
                    },{
                        title: '角色',
                        key: 'a'
                    },{
                        title: '最后登录时间',
                        key: 'a'
                    },{
                        title: '来源',
                        key: 'a'
                    },{
                        title: '操作',
                        width: 130,
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
                                }, '编辑'),
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