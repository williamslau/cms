<template>
    <Select v-model="formItem.all_rights_reserved">
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
                    {name:'外采原创',value:'0'},
                    {name:'外采出版',value:'1'},
                    {name:'其他',value:'2'},
                ],
            }
        },
    }
</script>