<template>
    <Select v-model="formItem.copy_type">
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
                    {name:'独家',value:'0'},
                    {name:'带转授权',value:'1'},
                    {name:'非独家',value:'2'},
                    {name:'非独家带转授权',value:'3'},
                ],
            }
        },
    }
</script>