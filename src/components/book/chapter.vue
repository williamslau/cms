<template>
    <div>
        <div>
            <Table border :columns="columns" :data="data"></Table>
            <div class="clearfix page">
                <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                formItem:{
                    page:1,
                    limit:10,
                },
                columns:[
                    {
                        title: '章节序号',
                        key: 'idx'
                    },{
                        title: '章节名',
                        key: 'title',
                        render: (h, params) => {
                            return h('div', [
                                h('p', {
                                    style:{
                                        cursor:'pointer',
                                        color:'#4577bc',
                                    },
                                    on:{
                                        click: () => {
                                            this.$router.push({path:'/bookList/seeChapter',query:{id:params.row.id}});
                                        }
                                    }
                                }, params.row.title),
                            ])
                        }
                    },{
                        title: '字数',
                        key: 'words'
                    },{
                        title: '更新时间',
                        key: 'updated_at'
                    }
                ],
                data:[],
                total:0,
            }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                this.$http.get(`/api/books/${this.$route.query.id}/chapters`,{
                    params:this.formItem
                }).then( res => {
                    this.data=res.data.list;
                    this.total=res.data.total;
                })
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
<style scoped>
    .btn{
        cursor:pointer;
        color:#4577bc;
    }
</style>

