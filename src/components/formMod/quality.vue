<template>
    <Select v-model="formItem.quality" style="width:200px">
        <Option v-for="(item,index) in qualityOpt" :value="item.value" :key="index">{{item.name}}</Option>
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
                qualityOpt:[
                    {name:'请选择',value:''},
                    {name:'A级',value:'A'},
                    {name:'B级',value:'B'},
                    {name:'C级',value:'C'},
                    {name:'D级',value:'D'},
                    {name:'未定义',value:'N'},
                ],
            }
        },
    }
</script>