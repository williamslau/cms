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
                    start:0,
                    length:10,
                },
                columns:[
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },{
                        title: '书籍 ID',
                        key: 'bid'
                    },{
                        title: '操作人',
                        key: 'realname'
                    },{
                        title: '操作详情',
                        key: 'log'
                    },{
                        title: '操作时间',
                        key: 'created_at'
                    }
                ],
                data:[],
                total:0,
            }
        },
        created(){
            this.$http.get(`/api/books/${this.$route.query.id}/logs`).then( res => {
                console.log(res);
                this.data=res.data.list;
                this.total=res.data.total;
            })
        },
        methods:{
            pageChange(res){
                this.formItem.start=res-1;
            },
            pageSize(res){
                this.formItem.length=res;
            }
        },
    }
</script>