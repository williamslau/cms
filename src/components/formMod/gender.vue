<template>
    <span>
        <Form-item label="频道">
            <Select v-model="formItem.gender_id" @on-change="genderChange" style="width:200px">
                <Option value="">请选择</Option>
                <Option v-for="(item,index) in genderData" :key="index" :value="item.id">{{item.name}}</Option>
            </Select>
        </Form-item>
        <Form-item label="分类">
            <Select v-model="formItem.cate_id" style="width:200px">
                <Option value="">请选择</Option>
                <Option v-for="(item,index) in cateData" :key="index" :value="item.id">{{item.title}}</Option>
            </Select>
        </Form-item>
    </span>
</template>
<script>
export default {
    props: {
        formItem: {
            required: true
        },
    },
    data() {
        return {
            genderData: [],
            cateData: [],
        }
    },
    created() {
        this.getData();
    },
    methods: {
        genderChange(e) {
            if (e == '' || e == undefined) {
                this.cateData = [];
                this.formItem.cate_id = '';
            } else {
                this.cateData = this.genderData.filter(res => (res.id == e))[0].children;
            }
        },
        getData() {
            this.$http.get('/api/categories').then(res => {
                this.genderData = res.data;
                if (this.formItem.gender_id != '') {
                    this.genderChange(this.formItem.gender_id);
                }
            })
        },
    },
}
</script>