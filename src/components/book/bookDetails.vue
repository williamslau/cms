<template>
    <div>
        <div>
            <Form :model="formItem" :label-width="100">
                <Form-item label="书籍名称">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
                <Form-item label="作者">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
                <Form-item label="字数">
                    123456
                </Form-item>
                <Form-item label="章节">
                    123
                </Form-item>
                <Form-item label="上传封面">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <div class="upload">
                            <Icon size="32" color="#4676be" class="icon" type="md-add-circle" />
                            <p>点击上传附件</p>
                            <span>支持jpg/png/pdf格式<br>不超过1M</span>
                        </div>
                    </Upload>
                </Form-item>
                <Form-item label="简介">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
                <Form-item label="主角">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
            </Form>
            <Form :label-width="100" inline>
                <Form-item label="频道">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
                <Form-item label="分类">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
                <Form-item label="质量">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
                <Form-item label="尺度">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
            </Form>
            <Form :label-width="100">
                <Form-item label="添加标签">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="版权来源">
                    <Input type="text" v-model="formItem.name"></Input>
                </Form-item>
                <Form-item label="授权范围">
                    <Select v-model="formItem.name" style="width:200px">
                        <Option value="">请选择</Option>
                    </Select>
                </Form-item>
                <Form-item label="状态">
                    <RadioGroup v-model="formItem.name">
                        <Radio label="1" disabled>已完结</Radio>
                        <Radio label="1">连载中</Radio>
                    </RadioGroup>
                </Form-item>
                <Form-item>
                    <Button type="primary">确认修改</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                formItem:{
                    name:'',
                    start:0,
                    length:10,
                },
            }
        },
    }
</script>