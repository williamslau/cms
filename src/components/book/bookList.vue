<template>
    <div>
        <Form :model="formItem" :label-width="100" inline>
            <gender :formItem="formItem"></gender>
            <Form-item label="尺度">
                <sexy :formItem="formItem"></sexy>
            </Form-item>
            <Form-item label="质量">
                <quality :formItem="formItem"></quality>
            </Form-item>
            <Form-item label="状态">
                <status :formItem="formItem"></status>
            </Form-item>
            <Form-item label="授权范围">
                <authRange :formItem="formItem"></authRange>
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
                <Button type="primary" @click="empowerFn">授权</Button>
            </Form-item>
        </Form>
        <Table border :columns="columns" @on-selection-change="checkChangeFn" :data="data"></Table>
        <div class="clearfix page">
            <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
        </div>
        <Modal
            v-model="empowerShow"
            title="书籍授权">
            <div>
                <Select>
                    <Option value="">1</Option>
                    <Option value="">2</Option>
                </Select>
            </div>
            <div slot="footer">
                <Button @click="empowerShow=false">取消</Button>
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
                    sexy:'',
                    quality:'',
                    status:'',
                    auth_range:'',
                    words:'',
                    page:1,
                    limit:10,
                },
                columns:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },{
                        title: '书籍ID',
                        key: 'id'
                    },{
                        title: '书籍书名',
                        key: 'title'
                    },{
                        title: '作者',
                        key: 'author'
                    },{
                        title: '别名',
                        key: 'alias'
                    },{
                        title: '分类',
                        key: 'cate_title'
                    },{
                        title: '主角',
                        key: 'role'
                    },{
                        title: '状态',
                        key: 'status'
                    },{
                        title: '章节数',
                        key: 'sections'
                    },{
                        title: '质量',
                        key: 'quality'
                    },{
                        title: '尺度',
                        key: 'sexy'
                    },{
                        title: '更新时间',
                        key: 'updated_at'
                    },{
                        title: '来源',
                        key: 'origin'
                    },{
                        title: '合作模式',
                        key: 'cooper_mode'
                    },{
                        title: '授权范围',
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
                                            this.$router.push({path:'/bookList/book'});
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
                data:[],
                empowerShow:false,
                total:0,
            }
        },
        created(){
            this.getData();
            console.log(1);
        },
        methods:{
            getData(){
                this.$http.get('/api/books',{
                    params:this.formItem
                }).then( res => {
                    console.log(res);
                    this.data=res.data.list;
                    this.total=res.data.total;
                })
            },
            confirmFn(){
                this.empowerShow=false;
            },
            empowerFn(){
                this.empowerShow=true;
            },
            checkChangeFn(e){
                this.tids=e.map(item=>item.tid);
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

            }
        },
        components:{
            gender:formMod.gender,
            sexy:formMod.sexy,
            quality:formMod.quality,
            status:formMod.status,
            authRange:formMod.authRange,
            words:formMod.words
        }
    }
</script>