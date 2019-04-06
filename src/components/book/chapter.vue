<template>
    <div>
        <div>
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
                        title: '章节序号',
                        key: 'a'
                    },{
                        title: '章节名',
                        key: 'a',
                        render: (h, params) => {
                            return h('div', [
                                h('p', {
                                    style:{
                                        cursor:'pointer',
                                        color:'#4577bc',
                                    },
                                    on:{
                                        click: () => {
                                            this.$router.push({path:'/bookList/seeChapter'});
                                        }
                                    }
                                }, params.row.b),
                            ])
                        }
                    },{
                        title: '字数',
                        key: 'a'
                    },{
                        title: '更新时间',
                        key: 'a'
                    }
                ],
                data:[{
                    a:1,
                    b:2
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
    .btn{
        cursor:pointer;
        color:#4577bc;
    }
</style>

