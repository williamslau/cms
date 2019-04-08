<template>
    <Select v-model="formItem.status" style="width:200px">
        <Option value="">请选择</Option>
        <Option value="ongoing">连载</Option>
        <Option value="completed">完结</Option>
    </Select>
</template>
<script>
    export default {
	    props:{
            formItem:{
                required: true
            },
        }
    }
</script>