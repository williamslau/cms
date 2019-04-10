<template>
    <Select v-model="formItem.cooperate_type">
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
                    {name:'买断',value:'0'},
                    {name:'预付加分成',value:'1'},
                    {name:'纯分成',value:'2'},
                    {name:'其他',value:'3'},
                ],
            }
        },
    }
</script>