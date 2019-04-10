<template>
    <div>
        <Form :model="formItem" :label-width="100">
            <Row>
                <Col span="12">
                    <Form-item label="合同编号">
                        <Input type="text" v-model="formItem.contract_no"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约时间">
                        <DatePicker
                            @on-change="formItem.sign_at=$event"
                            v-model="formItem.sign_at"
                            placeholder="请选择时间"
                            type="date"
                            style="width:100%"
                        ></DatePicker>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="开始时间">
                        <DatePicker
                            @on-change="formItem.start_at=$event"
                            v-model="formItem.start_at"
                            placeholder="请选择时间"
                            type="date"
                            style="width:100%"
                        ></DatePicker>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="结束时间">
                        <DatePicker
                            @on-change="formItem.end_at=$event"
                            v-model="formItem.end_at"
                            placeholder="请选择时间"
                            type="date"
                            style="width:100%"
                        ></DatePicker>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约年限">
                        <Input type="text" v-model="formItem.auth_year"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="千字/元">
                        <Input type="text" v-model="formItem.kword_price"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="授权范围">
                        <authRange :formItem="formItem"></authRange>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约类型">
                        <signType :formItem="formItem"></signType>
                    </Form-item>
                </Col>
                <Col span="24">
                    <Form-item label="备注">
                        <Input type="text" v-model="formItem.remark"></Input>
                    </Form-item>
                </Col>
            </Row>
            <Form-item>
                <Button type="primary" @click="successFn">保存</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
import formMod from '../formMod';
export default {
    data() {
        return {
            formItem: {
                id: this.$route.query.id,
                type:'origin',
                contract_no: '',
                start_at: '',
                end_at: '',
                auth_year: '',
                sign_type: '',
                kword_price: '',
                auth_range: '',
                remark: '',
                sign_at: '',
            }
        }
    },
    created() {
        if (this.$route.query.type) {
            this.$http.get(`/api/contracts/${this.$route.query.id}`).then(res => {
                if (res.code == 1) {
                    this.formItem = res.data[0];
                }
            })
        }
    },
    methods: {
        successFn() {
            if (this.$route.query.type) {
                this.$http.put(`/api/contracts/${this.$route.query.id}`, this.formItem).then(res => {
                    if (res.code == 1) {
                        this.$Notice.success({
                            title: '修改自有合同',
                            desc: '修改成功'
                        });
                        this.$router.push({ path: '/copyRight/contract', query: { id: this.$route.query.fid } });
                    }
                })
            } else {
                this.$http.post(`/api/contracts`, this.formItem).then(res => {
                    if (res.code == 1) {
                        this.$Notice.success({
                            title: '添加自有合同',
                            desc: '添加成功'
                        });
                        this.$router.push({ path: '/copyRight/contract', query: { id: this.$route.query.fid } });
                    }
                })
            }

        }
    },
    components: {
        ...formMod
    }
}
</script>
