<template>
    <div>
        <Form>
            <Form-item>
                <Button type="primary" @click="addUserFn">增加</Button>
            </Form-item>
        </Form>
        <Table border :columns="columns" :data="data"></Table>
        <div class="clearfix page">
            <Page :total="total" class="fr" @on-change="pageChange" @on-page-size-change="pageSize" :current="formItem.page" placement="top" show-elevator show-sizer></Page>
        </div>
        <Modal
            v-model="addShow"
            :title="addTitle">
            <Form ref="add" :label-width="100">
                <Form-item label="	用户名">
                    <Input type="text" v-model="addForm.uname"></Input>
                </Form-item>
                <Form-item label="姓名">
                    <Input type="text" v-model="addForm.realname"></Input>
                </Form-item>
                <Form-item label="密码">
                    <Input type="text" v-model="addForm.pwd"></Input>
                </Form-item>
                <Form-item label="部门">
                    <Input type="text" v-model="addForm.department"></Input>
                </Form-item>
                <Form-item label="角色">
                    <Select v-model="addForm.role" style="width:100%">
                        <Option :value="1">管理员</Option>
                        <Option :value="2">普通用户</Option>
                    </Select>
                </Form-item>
                <Form-item label="产品">
                    <Select v-model="addForm.pids" multiple>
                        <Option v-for="(item,index) in pidsOpt" :value="item.id" :key="index">{{ item.title }}</Option>
                    </Select>
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
export default {
    data() {
        return {
            formItem: {
                start: 0,
                length: 10,
            },
            addForm: {
                uname: '',
                realname: '',
                pwd: '',
                department: '',
                role: '',
                pids: [],
            },
            pidsOpt: [],
            addTitle: '',
            addId: '',
            columns: [
                {
                    title: '用户名',
                    key: 'uname'
                }, {
                    title: '姓名',
                    key: 'realname'
                }, {
                    title: '部门',
                    key: 'department'
                }, {
                    title: '角色',
                    key: 'role'
                }, {
                    title: '最后登录时间',
                    key: 'lastat'
                }, {
                    title: '操作',
                    width: 80,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$http.get(
                                            `/api/users/${params.row.id}`
                                        ).then(res => {
                                            if (res.code == 1) {
                                                this.addTitle = '修改用户';
                                                this.addShow = true;
                                                this.addForm = res.data;
                                                this.addId = params.row.id;
                                            }
                                        })
                                    }
                                }
                            }, '修改'),
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
        this.$http.get('/api/product_list').then(res => {
            this.pidsOpt = res.data.list;
        })
    },
    methods: {
        getData() {
            this.$http.get('/api/users', {
                params: this.formItem
            }).then(res => {
                this.data = res.data.list;
                this.total = res.data.total;
            })
        },
        addUserFn() {
            this.addTitle = '新增用户';
            this.$refs.add.resetFields();
            this.addShow = true;
        },
        confirmFn() {
            let type = 'put';
            let query = '';
            if (this.addTitle == '新增用户') {
                type = 'post';
            } else {
                query = `/${this.addId}`;
            }
            this.$http[type](`/api/users${query}`, this.addForm).then(res => {
                if (res.code == 1) {
                    this.addShow = false;
                    this.$Notice.success({
                        title: this.addTitle,
                        desc: `${this.addTitle}成功`
                    });
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