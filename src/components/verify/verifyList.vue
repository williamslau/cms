<template>
    <div>
        <Form :model="formItem" :label-width="100" inline>
            <gender :formItem="formItem"></gender>
            <Form-item label="状态">
                <status :formItem="formItem"></status>
            </Form-item>
            <Form-item label="书名/作者/站点">
                <words :formItem="formItem"></words>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="init">搜索</Button>
            </Form-item>
        </Form>
        <Form inline>
            <Form-item>
                <Button type="primary" @click="addShow=true">增加书籍</Button>
            </Form-item>
        </Form>
        <Table border :columns="columns" :data="data"></Table>
        <div class="clearfix page">
            <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
        </div>
        <Modal
            v-model="addShow"
            title="增加白狐同步书籍">
            <Form :label-width="100" inline>
                <Form-item label="小说名">
                    <Input type="text" v-model="addForm.title"></Input>
                </Form-item>
                <Form-item label="小说ID">
                    <Input type="text" v-model="addForm.origin_id"></Input>
                </Form-item>
            </Form>
            <div slot="footer">
                <Button @click="addShow=false">取消</Button>
                <Button type="primary" @click="confirmFn">确认</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import formMod from '../formMod';
    export default {
        data(){
            return{
                formItem:{
                    gender_id:'',
                    cate_id:'',
                    status:'',
                    words:'',
                    page:1,
                    limit:10,
                },
                addForm:{
                    title:'',
                    origin_id:'',
                },
                columns:[
                    {
                        title: '书名',
                        key: 'title'
                    },{
                        title: '作者',
                        key: 'author'
                    },{
                        title: '分类',
                        key: 'cate_title'
                    },{
                        title: '状态',
                        key: 'status'
                    },{
                        title: '章节',
                        key: 'sections'
                    },{
                        title: '来源',
                        key: 'origin'
                    },{
                        title: '更新时间',
                        key: 'updated_at'
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
                                            this.$router.push({path:'/verifyList/verify',query:{id:params.row.id}});
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
                                            this.$Modal.confirm({
                                                title: '书籍下载',
                                                content:'确认下载书籍？',
                                                onOk:()=>{
                                                    window.open(`/api/booktmp/${params.row.id}/export`);
                                                }
                                            });
                                        }
                                    }
                                }, '下载'),
                            ]);
                        }
                    }
                ],
                data:[],
                addShow:false,
                total:0,
            }
        },
        created(){
            this.getData();
        },
        methods:{
            confirmFn(){
                this.$http.post('/api/booktmp/addsync/origin',
                this.addForm).then( res => {
                    if(res){
                        this.$Notice.success({
                            title: '增加书籍',
                            desc: '增加成功成功'
                        });
                        this.getData();
                        this.addShow=false;
                    }
                })
            },
            getData(){
                this.$http.get('/api/booktmp',{
                    params:this.formItem
                }).then( res => {
                    this.data=res.data.list;
                    this.total=res.data.total;
                })
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
        components:{
            ...formMod
        }
    }
</script>