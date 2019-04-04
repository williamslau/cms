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
                        title: 'ID',
                        key: 'stid'
                    },{
                        title: '书名',
                        key: 'wname'
                    },{
                        title: '导入时间',
                        key: 'tasknumber'
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