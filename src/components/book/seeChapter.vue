<template>
    <div>
        <Form :label-width="100">
            <Form-item label="章节序号">
                <Input type="text"></Input>
            </Form-item>
            <Form-item label="章节名称">
                <Input type="text"></Input>
            </Form-item>
            <Form-item label="内容">
                <Input type="textarea" :rows="30"/>
            </Form-item>
            <Form-item>
                <Button type="primary">确认修改</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
            }
        },
        methods:{
        },
    }
</script>
<style>
.content{
    border:1px solid #eee;
    padding:30px;
}
</style>
