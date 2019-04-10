<template>
    <div>
        <div>
            <Form :label-width="100">
                <Form-item label="书籍名称">
                    <Input v-model="data.title" style="width:200px"></Input>
                </Form-item>
                <Form-item label="作者">
                    <Input v-model="data.author" style="width:200px"></Input>
                </Form-item>
                <Form-item label="字数">
                    <Input v-model="data.words" style="width:200px"></Input>
                </Form-item>
                <Form-item label="章节">
                    <Input v-model="data.sections" style="width:200px"></Input>
                </Form-item>
                <Form-item label="上传封面" class="clearfix">
                    <img class="fl" :src="data.cover" alt="">
                    <div class="uploadBtn fl">
                        <Upload
                            :action="`/api/booktmp/${this.$route.query.id}/upload_cover`"
                            name="book_cover"
                            :on-success="fileSuccessFn"
                            :show-upload-list="false"
                        >
                            <div class="upload">
                                <Icon size="32" color="#4676be" class="icon" type="md-add-circle" />
                                <p>点击上传附件</p>
                                <span>支持jpg/png/pdf格式<br>不超过1M</span>
                            </div>
                        </Upload>
                    </div>
                </Form-item>
                <Form-item label="简介">
                    <Input type="textarea" :rows="6" v-model="data.summary"></Input>
                </Form-item>
                <Form-item label="主角">
                    <Input v-model="data.role" style="width:200px"></Input>
                </Form-item>
            </Form>
            <Form :label-width="100" inline>
                <gender :formItem="data"></gender>
                <Form-item label="质量">
                    <quality :formItem="data"></quality>
                </Form-item>
                <Form-item label="尺度">
                    <sexy :formItem="data"></sexy>
                </Form-item>
            </Form>
            <Form :label-width="100">
                <Form-item label="添加标签">
                    <Input type="text" v-model="data.tags"></Input>
                </Form-item>
                <Form-item label="版权来源">
                    <Input type="text" v-model="data.site"></Input>
                </Form-item>
                <Form-item label="授权范围">
                    <authRange :formItem="data"></authRange>
                </Form-item>
                <Form-item label="状态">
                    <status :formItem="data"></status>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="modifyFn">确认修改</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
import formMod from '../formMod';
export default {
    data() {
        return {
            data: {
                alias: '',
                auth_range: '',
                author: '',
                cate_id: '',
                cate_title: '',
                cooper_mode: '',
                cover: '',
                created_at: '',
                deleted_at: '',
                gender_id: '',
                gender_title: '',
                id: '',
                incr_id: '',
                mt_author: '',
                origin: '',
                origin_id: '',
                quality: '',
                role: '',
                sections: '',
                sexy: '',
                site: '',
                site_id: '',
                status: '',
                summary: '',
                tags: '',
                title: '',
                updated_at: '',
                words: '',
            }
        }
    },
    created() {
        this.$http.get(
            `/api/booktmp/${this.$route.query.id}`
        ).then(res => {
            this.data = res.data;
        })
    },
    methods: {
        fileSuccessFn(res) {
            this.data.cover = res.data.file_path;
            this.$Notice.success({
                title: '上传图片',
                desc: '上传成功'
            });
        },
        modifyFn() {
            this.$http.put(`/api/booktmp/${this.$route.query.id}`, this.data).then(res => {
                console.log(res);
                this.$Notice.success({
                    title: '修改书籍详情',
                    desc: '修改成功'
                });
            })
        }
    },
    components: {
        ...formMod
    }
}
</script>
<style scoped>
img {
	width: 200px;
}
</style>
