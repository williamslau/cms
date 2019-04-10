<template>
    <div>
        <Form :label-width="100">
            <Form-item label="章节序号">
                {{data.book_title}}
            </Form-item>
            <Form-item label="章节序号">
                <Input type="text" v-model="data.idx"></Input>
            </Form-item>
            <Form-item label="章节名称">
                <Input type="text" v-model="data.chapter_title"></Input>
            </Form-item>
            <Form-item label="内容">
                <Input type="textarea" :rows="30" v-model="data.content"/>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="modifyFn">确认修改</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                data:{
                    book_title: '',
                    chapter_title: '',
                    content: '',
                    id: '',
                    idx: '',
                }
            }
        },
        created() {
            this.$http.get(`/api/chaptertmp/${this.$route.query.id}`).then(res => {
                this.data = res.data;
            })
        },
        methods:{
            modifyFn() {
                this.$Modal.confirm({
                    title: '修改章节',
                    content:'确认要修改章节？',
                    onOk:()=>{
                        this.$http.put(`/api/chaptertmp/${this.$route.query.id}`, {
                            title:this.data.chapter_title,
                            contents:this.data.content,
                            idx:this.data.idx,
                        }).then(res => {
                            this.$Notice.success({
                                title: '修改章节',
                                desc: '修改成功'
                            });
                        })
                    }
                });
            }
        },
    }
</script>
<style>
.content{
    border:1px solid #eee;
    padding:30px;
}
</style>
