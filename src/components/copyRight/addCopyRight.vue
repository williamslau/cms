<template>
    <div>
        <Form :model="formItem" :label-width="100">
            <Card style="margin-bottom:20px">
                <p slot="title">版权类型</p>
                <Form-item label="频道">
                    <Select v-model="formItem.origin" style="width:200px">
                        <Option value="">请选择</Option>
                        <Option value="third">外采</Option>
                        <Option value="origin">自有</Option>
                    </Select>
                </Form-item>
            </Card>
            <Card style="margin-bottom:20px">
                <p slot="title">基本信息</p>
                <Form-item label="网站/公司简称">
                    <Input type="text" v-model="formItem.company"></Input>
                </Form-item>
                <Form-item label="版权方全称">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="联系地址">
                    <Input type="text" v-model="formItem.address"></Input>
                </Form-item>
                <Form-item label="联系人">
                    <Input type="text" v-model="formItem.contact"></Input>
                </Form-item>
                <Form-item label="联系电话">
                    <Input type="text" v-model="formItem.mobile"></Input>
                </Form-item>
            </Card>
            <Card style="margin-bottom:20px">
                <p slot="title">开户行信息</p>
                <Form-item label="银行账户">
                    <Input type="text" v-model="formItem.bank_account"></Input>
                </Form-item>
                <Form-item label="开户行">
                    <Input type="text" v-model="formItem.open_bank"></Input>
                </Form-item>
                <Form-item label="一般纳税人">
                    <Input type="text" v-model="formItem.tax_number"></Input>
                </Form-item>
                <Form-item label="营业执照" class="clearfix">
                    <img class="fl" :src="url" alt="">
                    <div class="uploadBtn fl">
                        <Upload
                            action="/api/sources"
                            name="license"
                            :before-upload="beforeUpload"
                        >
                            <div class="upload">
                                <Icon size="32" color="#4676be" class="icon" type="md-add-circle" />
                                <p>点击上传附件</p>
                                <span>支持jpg/png/pdf格式<br>不超过1M</span>
                            </div>
                        </Upload>
                    </div>
                </Form-item>
            </Card>
            <Form-item>
                <Button type="primary" @click="successFn">保存</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formItem: {
                company: '',
                address: '',
                contact: '',
                mobile: '',
                open_bank: '',
                bank_account: '',
                tax_number: '',
                license: '',
            },
            url: '',
        }
    },
    created() {
        if (this.$route.query.type) {
            this.$http.get(`/api/sources/${this.$route.query.id}`).then(res => {
                if (res.code == 1) {
                    this.formItem = res.data[0];
                    this.url = res.data[0].license;
                    this.formItem.license = '';
                }
            })
        }
    },
    methods: {
        beforeUpload(file) {
            this.formItem.license = file;
            return false;
        },
        fileSuccessFn(res) {
            this.$Notice.success({
                title: '上传图片',
                desc: '上传成功'
            });
        },
        successFn() {
            let type;
            let query = '';
            let title = '新增';
            let formData = new FormData();
            for (let name in this.formItem) {
                formData.append(name, this.formItem[name]);
            }
            if (this.$route.query.type) {
                type = 'put';
                query = `/${this.$route.query.id}`;
                title = '修改';
                formData.append('_method', 'put');
            }
            this.$http.post(`/api/sources${query}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(res => {
                if (res.code == 1) {
                    this.$Notice.success({
                        title: `${title}版权`,
                        desc: `${title}成功`
                    });
                    this.$router.push({ path: '/copyRight' });
                }
            })
        },
    },
}
</script>
<style>
.upload {
	width: 240px;
	height: 180px;
	background: #f2f2f2;
	text-align: center;
	cursor: pointer;
}
.upload .icon {
	margin-top: 40px;
	margin-bottom: 17px;
}
.upload p {
	font-size: 14px;
	color: #666;
}
.upload span {
	display: block;
	font-size: 12px;
	line-height: 20px;
	color: #999;
}
img {
	width: 200px;
}
</style>
