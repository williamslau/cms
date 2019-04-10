<template>
    <div>
        <div>
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
                cid: '',
                page: 1,
                limit: 10,
            },
            columns: [
                {
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '书名',
                    key: 'title'
                }
            ],
            data: [{
                wname: 1,
                tasknumber: 1,
                sname: 1,
                city: 1
            }],
            total: 0,
        }
    },
    created() {
        this.getdata();
    },
    methods: {
        getdata() {
            this.$http.get('/api/products').then(res => {
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
    },
}
</script>