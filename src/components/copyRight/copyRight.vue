<template>
    <div>
        <Form :model="formItem" :label-width="100" inline>
            <Form-item label="版权方名称">
                <Input type="text" v-model="formItem.name"></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="init">查询</Button>
            </Form-item>
        </Form>
        <Form inline>
            <Form-item>
                <Button type="primary" @click="addCopyRight">新增版权</Button>
            </Form-item>
        </Form>
        <Table border :columns="columns" :data="data"></Table>
        <div class="clearfix page">
            <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formItem: {
                name: '',
                page: 1,
                limit: 10,
            },
            columns: [
                {
                    title: '编号',
                    key: 'id'
                }, {
                    title: '版权类型',
                    key: 'origin'
                }, {
                    title: '版权方简称',
                    key: 'name'
                }, {
                    title: '授权书数量',
                    key: 'book_nums'
                }, {
                    title: '创建时间',
                    key: 'created_at'
                }, {
                    title: '操作',
                    width: 260,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$Modal.confirm({
                                            title: '书籍下载',
                                            content: '确认下载书籍？',
                                            onOk: () => {
                                                window.open(`/api/sources/export/${params.row.id}`);
                                            }
                                        });
                                    }
                                }
                            }, '导出书单'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ path: '/copyRight/contract', query: { id: params.row.id } });
                                    }
                                }
                            }, '版权合同'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ path: '/copyRight/addCopyRight', query: { id: params.row.id, type: 'see' } });
                                    }
                                }
                            }, '版权方信息'),
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
            this.$http.get('/api/sources', {
                params: this.formItem
            }).then(res => {
                this.data = res.data.list;
                this.total = res.data.total;
            })
        },
        addCopyRight() {
            this.$router.push({ path: '/copyRight/addCopyRight' });
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