<template>
    <Input type="text" v-model="formItem.words"></Input>
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