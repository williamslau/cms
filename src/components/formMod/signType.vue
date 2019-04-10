<template>
    <Select v-model="formItem.sign_type">
        <Option v-for="(item,index) in Opt" :value="item.value" :key="index">{{item.name}}</Option>
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
            Opt: [
                { name: '请选择', value: '' },
                { name: '全勤', value: '0' },
                { name: '保底', value: '1' },
                { name: '买断', value: '2' },
            ],
        }
    },
}
</script>