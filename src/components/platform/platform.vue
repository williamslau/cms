<template>
    <div>
        <Form>
            <Form-item>
                <Button type="primary" @click="addFn">添加应用</Button>
            </Form-item>
        </Form>
        <Table border :columns="columns" :data="data"></Table>
        <div class="clearfix page">
            <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
        </div>
        <Modal
            v-model="addShow"
            :title="addTitle">
            <div>
                <Input type="text" v-model="title"></Input>
            </div>
            <div slot="footer">
                <Button @click="addShow=false">取消</Button>
                <Button type="primary" @click="confirmFn">确认</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formItem: {
                page: 1,
                limit: 10,
            },
            title: '',
            addTitle: '',
            addId: '',
            columns: [
                {
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '应用平台',
                    key: 'title'
                }, {
                    title: '授权统计',
                    key: 'book_num'
                }, {
                    title: '创建时间',
                    key: 'created_at'
                }, {
                    title: '操作',
                    width: 220,
                    render: (h, params) => {
                        return h('div', [
                            h('Upload', {
                                props: {
                                    action: '/api/products_upload',
                                    name: 'booklist',
                                    'on-success': this.fileSuccessFn,
                                    'show-upload-list': false,
                                    data: { pid: params.row.id }
                                },
                                style: {
                                    display: 'inline-block'
                                },
                            }, [h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, '导入书单')]),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.addShow = true;
                                        this.addTitle = '修改应用';
                                        this.title = params.row.title;
                                        this.addId = params.row.id;
                                    }
                                }
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ path: '/platform/empower', query: { id: params.row.id } });
                                    }
                                }
                            }, '授权书籍'),
                        ]);
                    }
                }
            ],
            data: [],
            addShow: false,
            total: 0,
        }
    },
    created() {
        this.getData();
    },
    methods: {
        fileSuccessFn(res) {
            if (res.code == 0) {
                this.$Notice.error({
                    title: '导入书单',
                    desc: res.msg
                });
            }else{
                this.$Notice.success({
                    title: '导入书单',
                    desc: '导入书单成功'
                });
            }
        },
        addFn() {
            this.addShow = true;
            this.addTitle = '添加应用';
            this.title = '';
        },
        getData() {
            this.$http.get('/api/products').then(res => {
                this.data = res.data.list;
                this.total = res.data.total;
            })
        },
        confirmFn() {
            let type = 'post';
            let query = ''
            if (this.addTitle == '修改应用') {
                type = 'put';
                query = `/${this.addId}`;
            }
            this.$http[type](`/api/products${query}`, {
                title: this.title
            }).then(res => {
                if (res.code) {
                    this.$Notice.success({
                        title: this.addTitle,
                        desc: `${this.addTitle}成功`
                    });
                    this.addShow = false;
                    this.getData();
                }
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
}
</script>