<template>
    <Select v-model="formItem.auth_range">
        <Option v-for="(item,index) in authRangeOpt" :value="item.value" :key="index">{{item.name}}</Option>
    </Select>
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
                authRangeOpt: [
                    { name: '请选择', value: '' },
                    { name: '全平台', value: 0 },
                    { name: '收费阅读', value: 1 },
                    { name: '免费阅读', value: 2 },
                    { name: 'cps分销', value: 3 },
                    { name: '收费阅读和cps分销', value: 4 },
                    { name: '免费阅读和cps分销', value: 5 }
                ],
            }
        },
    }
</script>