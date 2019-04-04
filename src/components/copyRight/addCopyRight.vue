<template>
    <div>
        <Form :model="formItem" :label-width="100">
            <Card style="margin-bottom:20px">
                <p slot="title">版权类型</p>
                <Form-item label="频道">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
            </Card>
            <Card style="margin-bottom:20px">
                <p slot="title">基本信息</p>
                <Form-item label="网站/公司简称">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="版权方全称">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="联系地址">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="联系人">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="联系电话">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
            </Card>
            <Card style="margin-bottom:20px">
                <p slot="title">开户行信息</p>
                <Form-item label="银行账户">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="开户行">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="一般纳税人">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="营业执照">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <div class="upload">
                            <Icon size="32" color="#4676be" class="icon" type="md-add-circle" />
                            <p>点击上传附件</p>
                            <span>支持jpg/png/pdf格式<br>不超过1M</span>
                        </div>
                    </Upload>
                </Form-item>
            </Card>
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
