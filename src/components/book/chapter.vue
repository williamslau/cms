<template>
    <div>
        <div>
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
                        title: '质量',
                        key: 'a'
                    },{
                        title: '尺度',
                        key: 'a'
                    },{
                        title: '来源',
                        key: 'a'
                    },{
                        title: '授权范围',
                        key: 'a'
                    },{
                        title: '更新时间',
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
                                            this.$router.push({path:'/bookList/bookDetails'});
                                        }
                                    }
                                }, '详情'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                        }
                                    }
                                }, '下载'),
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