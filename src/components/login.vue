<template>
	<div class="login" :style="winSize">
        <div class="bt" :style="btOffset">
            <h1>阅读管理平台</h1>
            <h2>综合监控、统计报表、后台管理系统</h2>
        </div>
        <div class="login_box" :style="formOffset">
            <h3>登陆管理系统</h3>
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
                <Form-item prop="username">
                    <Input size="large" type="text" v-model="formCustom.username">
                        <Icon type="ios-person-outline" color="#4677bc" slot="prefix"></Icon>   
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input size="large" type="password" v-model="formCustom.password">
                        <Icon type="ios-lock-outline" color="#4677bc" slot="prefix"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button class="btn" size="large" @click="handleReset('formCustom')" style="margin-left: 8px">清空</Button>
                    <Button class="btn" size="large" type="primary" @click="handleSubmit('formCustom')">确认</Button>
                </Form-item>
            </Form>
        </div>
	</div>
</template>
<script>
	export default{
		data(){
			const usernameFn = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                }else{
                	callback();
                }
            };
            const passwordFn = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else{
                	callback();
                }
            };
            
            return {
                formCustom: {
                    username: '',
                    password: '',
                },
                ruleCustom: {
                    username: [
                        { validator: usernameFn, trigger: 'blur' },
                    ],
                    password: [
                        { validator: passwordFn, trigger: 'blur' }
                    ]
                },
                winSize: {
                    width:'',
                    height:''
                },
                formOffset: {
                    position:'absolute',
                    right:'250px',
                    top:''
                },
                btOffset:{
                    position:'absolute',
                    left:'250px',
                    top:''
                }
            }
		},
		created(){
        	this.setSize();
        	window.addEventListener('resize',this.setSize);
        },
		methods:{
			setSize() {
                this.winSize.height = document.documentElement.clientHeight + "px";

                this.winSize.width = document.documentElement.clientWidth + "px";

                this.formOffset.top = (parseInt(this.winSize.height) / 2 - 190) + 'px';
                this.btOffset.top = (parseInt(this.winSize.height) / 2 - 80) + 'px';
            },
        	handleSubmit (name) {
                this.$router.push({path:'/copyRight'});
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //     	var _this=this;
	               //      this.$http.get('/xiangpai/web/login/loginCheck',{
	               //          params:_this.formCustom
	               //      }).then(function(res){
                //             console.log(res);
	               //          if(res.success){
                //                 //_this.$store.dispatch('rightFn',res.data.aid);
                //                 //_this.$store.state.rightId=res.data.aid;
                //                 localStorage.setItem('aid',res.data.aid);
                //                 localStorage.setItem('name',res.data.name);
                //                 localStorage.setItem('departmentid',res.data.departmentid);
                //                 localStorage.setItem('position',res.data.position);
                //                 localStorage.setItem('isShowSignInBtn',res.data.isShowSignInBtn);
                //                 _this.$router.push({path:'/home'});
                //                 _this.$Notice.success({
                //                     title: '登录',
                //                     desc:res.message
                //                 });
	               //          }else{
                //                 _this.$Notice.error({
                //                     title: '登录',
                //                     desc:res.message
                //                 });
                //             }
	               //      }).catch(function(err){
	               //      	_this.$Notice.error({
                //                 title: '登录',
                //                 desc: '操作失败'
                //             });
	               //      });
                //     } else {
                //         this.$Message.error('表单验证失败!');
                //     }
                // })
            },
            handleReset (name) {
                // this.$refs[name].resetFields();
            }
		}
	}
</script>
<style scoped>
	.login{
		background:url(../assets/images/bkg.jpg);
        background-size:120%;
	}
	.login_box{
		width: 450px;
       	padding: 60px;
		box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        background-color: #fff;
        border: 2px solid #8492A6;
	}
    .login_box h3{
        font-size:22px;
        margin-bottom:46px;
    }
    .bt{
        color:#fff;
    }
    .bt h1{
        font-size:78px;
    }
    .bt h2{
        font-size:30px;
    }
</style>