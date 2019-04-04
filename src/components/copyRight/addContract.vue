<template>
    <div>
        <Form :model="formItem" :label-width="100">
            <Row>
                <Col span="12">
                    <Form-item label="合同编号">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约时间">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="开始时间">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="结束时间">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="授权年限">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="版权所有方">
                        <Select v-model="formItem.name" style="width:100%">
                            <Option value="">请选择</Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="授权方">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="被授权方">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约金额">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="分成比例">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="签约状态">
                        <Select v-model="formItem.name" style="width:100%">
                            <Option value="">请选择</Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="版权性质">
                        <Select v-model="formItem.name" style="width:100%">
                            <Option value="">请选择</Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="授权范围">
                        <Select v-model="formItem.name" style="width:100%">
                            <Option value="">请选择</Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="合作模式">
                        <Select v-model="formItem.name" style="width:100%">
                            <Option value="">请选择</Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="24">
                    <Form-item label="备注">
                        <Input type="text" v-model="formItem.name"></Input>
                    </Form-item>
                </Col>
            </Row>
            <Form-item>
                <Button type="primary">保存</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                formItem:{

                }
            }
        },
        methods:{
        },
    }
</script>
<style>
.upload{
    width:240px;
    height:180px;
    background: #f2f2f2;
    text-align:center;
    cursor: pointer;
}
.upload .icon{
    margin-top:40px;
    margin-bottom:17px;
}
.upload p{
    font-size:14px;
    color:#666;
}
.upload span{
    display:block;
    font-size:12px;
    line-height:20px;
    color:#999;
}
</style>
