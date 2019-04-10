<template>
    <div>
        <div>
            <Form :model="formItem" :label-width="100" inline>
                <Form-item label="开始时间">
                    <DatePicker
                        @on-change="formItem.start_at=$event"
                        v-model="formItem.start_at"
                        placeholder="请选择时间"
                        type="date"
                        style="width: 200px"
                    ></DatePicker>
                </Form-item>
                <Form-item label="到期时间">
                    <DatePicker
                        @on-change="formItem.end_at=$event"
                        v-model="formItem.end_at"
                        placeholder="请选择时间"
                        type="date"
                        style="width: 200px"
                    ></DatePicker>
                </Form-item>
                <Form-item label="合同编号">
                    <Input type="text" v-model="formItem.contract_no"/>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="init">查询</Button>
                </Form-item>
            </Form>
            <Form inline>
                <Form-item>
                    <Button type="primary" @click="addAbroadContract">添加合同(外采)</Button>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="addWithinContract">添加合同(自有)</Button>
                </Form-item>
            </Form>
            <Table border :columns="columns" :data="data"></Table>
            <div class="clearfix page">
                <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formItem: {
                site_id: this.$route.query.id,
                contract_no: '',
                start_at: '',
                end_at: '',
                page: 1,
                limit: 10,
            },
            columns: [
                {
                    title: '合同编号',
                    key: 'contract_no'
                }, {
                    title: '开始时间',
                    key: 'start_at'
                }, {
                    title: '到期时间',
                    key: 'end_at'
                }, {
                    title: '操作',
                    width: 260,
                    render: (h, params) => {
                        return h('div', [
                            h('Upload', {
                                props: {
                                    action: '/api/contracts_upload',
                                    name: 'booklist',
                                    'on-success': this.fileSuccessFn,
                                    'show-upload-list': false,
                                    data: { cid: params.row.id }
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
                                    size: 'small',
                                },
                                style: {
                                    display: params.row.type == 'third' ? 'inline-block' : 'none'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            path: '/copyRight/contract/addAbroadContract',
                                            query: { id: params.row.id, type: 'see', fid: this.$route.query.id }
                                        });
                                    }
                                }
                            }, '外采合同'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                style: {
                                    display: params.row.type == 'origin' ? 'inline-block' : 'none'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            path: '/copyRight/contract/addWithinContract',
                                            query: { id: params.row.id, type: 'see', fid: this.$route.query.id }
                                        });
                                    }
                                }
                            }, '自有合同'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ path: '/copyRight/contract/bookListDetails', query: { id: params.row.id } });
                                    }
                                }
                            }, '书单明细'),
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
        fileSuccessFn(res) {
            if (res.code == 0) {
                this.$Notice.error({
                    title: '导入书单',
                    desc: res.msg
                });
            } else {
                this.$Notice.success({
                    title: '导入书单',
                    desc: '导入书单成功'
                });
            }
        },
        getData() {
            this.$http.get('/api/contracts', {
                params: this.formItem
            }).then(res => {
                this.data = res.data.list;
                this.total = res.data.total;
            })
        },
        addAbroadContract() {
            this.$router.push({ path: '/copyRight/contract/addAbroadContract', query: { fid: this.$route.query.id } });
        },
        addWithinContract() {
            this.$router.push({ path: '/copyRight/contract/addWithinContract', query: { fid: this.$route.query.id } });
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