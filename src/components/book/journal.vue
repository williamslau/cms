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
                    start:0,
                    length:10,
                },
                columns:[
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },{
                        title: '操作人',
                        key: 'a'
                    },{
                        title: '操作详情',
                        key: 'a'
                    },{
                        title: '操作时间',
                        key: 'a'
                    }
                ],
                data:[{
                    a:1,
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
            }
        },
    }
</script>