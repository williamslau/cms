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
                    <Form-item label="授权方">
                        <Input type="text" v-model="formItem.auth"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="被授权方">
                        <Input type="text" v-model="formItem.by_auth"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="版权所有方">
                        <allRightsReserved :formItem="formItem"></allRightsReserved>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约年限">
                        <Input type="text" v-model="formItem.auth_year"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约金额">
                        <Input type="text" v-model="formItem.sign_money"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="分成比例">
                        <Input type="text" v-model="formItem.proportion"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约状态">
                        <signStatus style="width:100%" :formItem="formItem"></signStatus>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="版权性质">
                        <copyType :formItem="formItem"></copyType>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="授权范围">
                        <authRange :formItem="formItem"></authRange>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="合作模式">
                        <cooperateType style="width:100%" :formItem="formItem"></cooperateType>
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
                type:'third',
                contract_no: '',
                start_at: '',
                end_at: '',
                auth: '',
                by_auth: '',
                all_rights_reserved: '',
                auth_year: '',
                sign_money: '',
                proportion: '',
                sign_status: '',
                copy_type: '',
                auth_range: '',
                cooperate_type: '',
                sign_at: '',
                remark: '',
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
                            title: '修改外采合同',
                            desc: '修改成功'
                        });
                        this.$router.push({ path: '/copyRight/contract', query: { id: this.$route.query.fid } });
                    }
                })
            } else {
                this.$http.post(`/api/contracts`, this.formItem).then(res => {
                    if (res.code == 1) {
                        this.$Notice.success({
                            title: '添加外采合同',
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
