<template>
    <Select v-model="formItem.sign_status">
        <Option v-for="(item,index) in Opt" :value="item.value" :key="index">{{item.name}}</Option>
    </Select>
</template>
<script>
    export default {
	    props:{
            formItem:{
                required: true
            },
        },
        data(){
            return{
                Opt:[
                    {name:'请选择',value:''},
                    {name:'签约',value:'0'},
                    {name:'解约',value:'1'},
                ],
            }
        },
    }
</script>