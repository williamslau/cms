<template>
    <div>
        <div>
            <Form :model="formItem" :label-width="100" inline>
                <Form-item label="书籍来源">
                    <Input type="text" v-model="formItem.site"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="init">搜索</Button>
                </Form-item>
            </Form>
            <Form inline>
                <Form-item>
                    <Button type="primary" @click="deleteData">删除消息</Button>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="exportFn">导出消息</Button>
                </Form-item>
            </Form>
            <Table border :columns="columns" @on-selection-change="checkChangeFn" :data="data"></Table>
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
                    site:'',
                    page:1,
                    limit:10,
                },
                ids:[],
                columns:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },{
                        title: 'ID',
                        key: 'id'
                    },{
                        title: '书籍ID',
                        key: 'book_id'
                    },{
                        title: '书籍名称',
                        key: 'title'
                    },{
                        title: '书籍作者',
                        key: 'author'
                    },{
                        title: '来源',
                        key: 'site'
                    },{
                        title: '更新时间',
                        key: 'last_updated_at'
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
            exportFn(){
                this.$Modal.confirm({
                    title: '导出报表',
                    content:'确认要导出报表？',
                    onOk:()=>{
                        var jsonData=JSON.parse(JSON.stringify(this.formItem));
                        delete jsonData['start'];
                        delete jsonData['length'];
                        var jsonArr=[];
                        for(var name in jsonData){
                            jsonArr.push(name+'='+jsonData[name]);
                        }
                        var jsonStr=jsonArr.join('&');
                        window.open('/api/break_updates_csv?'+jsonStr);
                    }
                });
            },
            deleteData(){
                this.$http.delete('/api/break_updates',{
                    params:{
                        id:this.ids.join(',')
                    }
                }).then( res => {
                    this.$Notice.success({
                        title: '删除断更提醒',
                        desc: '删除成功'
                    });
                    this.getData();
                })
            },
            getData(){
                this.$http.get('/api/break_updates',{
                    params:this.formItem
                }).then( res => {
                    this.data=res.data.list;
                    this.total=res.data.total;
                })
            },
            checkChangeFn(e){
                this.ids=e.map(item=>item.id);
            },
            pageChange(res){
                this.formItem.page=res;
                this.getData();
            },
            pageSize(res){
                this.formItem.limit=res;
                this.getData();
            },
            init(){
                this.formItem.page=1;
                this.getData();
            }
        },
    }
</script>