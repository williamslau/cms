<template>
    <Form-item>
        <RadioGroup v-model="formItem.product_id">
            <Radio v-for="(item,index) in optData" :key="index" :label="item.product_id">{{item.product_name}}</Radio>
        </RadioGroup>
    </Form-item>
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
                optData:[],
            }
        },
        async created(){
            await this.$http.get('/api/stats/products').then( res => {
                this.optData=res.data;
                this.formItem.product_id=this.optData[0].product_id;
            })
        },
    }
</script>