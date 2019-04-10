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
            <Form-item label="书名/作者/站点">
                <words :formItem="formItem"></words>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="init">搜索</Button>
            </Form-item>
        </Form>
        <Table border :columns="columns" :data="data"></Table>
        <div class="clearfix page">
            <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
        </div>
    </div>
</template>
<script>
import formMod from '../formMod'
export default {
    data() {
        return {
            formItem: {
                pid: this.$route.query.id,
                gender_id: '',
                cate_id: '',
                sexy: '',
                quality: '',
                status: '',
                words: '',
                page: 1,
                limit: 10,
            },
            columns: [
                {
                    title: '书名',
                    key: 'title'
                }, {
                    title: '作者',
                    key: 'author'
                }, {
                    title: '分类',
                    key: 'cate_title'
                }, {
                    title: '主角',
                    key: 'role'
                }, {
                    title: '状态',
                    key: 'status'
                }, {
                    title: '章节',
                    key: 'sections'
                }, {
                    title: '质量',
                    key: 'quality'
                }, {
                    title: '尺度',
                    key: 'sexy'
                }, {
                    title: '来源',
                    key: 'origin'
                }, {
                    title: '授权用户',
                    key: 'realname'
                }, {
                    title: '授权时间',
                    key: 'created_at'
                }, {
                    title: '操作',
                    width: 110,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                style:{
                                    color:'#f00'
                                },
                                on: {
                                    click: () => {
                                        this.$Modal.confirm({
                                            title: '取消授权',
                                            content: '确认要取消授权？',
                                            onOk: () => {
                                                this.$http.post('/api/cancelauth', {
                                                    pid: this.$route.query.id,
                                                    bid: params.row.id
                                                }).then(res => {
                                                    if (res) {
                                                        this.$Notice.success({
                                                            title: '取消授权',
                                                            desc: '取消授权成功'
                                                        });
                                                        this.getData();
                                                    }
                                                })
                                            }
                                        });
                                    }
                                }
                            }, '取消授权'),
                        ]);
                    }
                }
            ],
            data: [],
            total: 0,
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            this.$http.get('/api/myproduct_books', {
                params: this.formItem
            }).then(res => {
                this.data = res.data.list;
                this.total = res.data.total;
            })
        },
        pageChange(res) {
            this.formItem.page = res;
            this.getData();
        },
        pageSize(res) {
            this.formItem.limit = res;
            this.getData();
        },
        init() {
            this.formItem.page = 1;
            this.getData();
        }
    },
    components: {
        ...formMod
    }
}
</script>