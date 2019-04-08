<template>
    <div class="layout">
        <Row type="flex">
            <Col span="24">
                <div class="layout-header">
                    <div class="fl logo">
                        <img src="../assets/images/logo.png" alt="">
                    </div>
                    <div class="clearfix username fr">
                        <div class="clearfix fr">
                            <Button type="text" @click="logOffFn">{{name}}
                                <Icon color="#fff" type="md-power"></Icon>
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span="4" class="layout-menu-left" :style="{minHeight:leftHeight}">
                <Menu active-name="0" theme="primary" width="auto" @on-select="MenuClick">
                    <MenuItem name="/copyRight">
                        <Icon type="ios-navigate" :size="24"></Icon>
                        <span class="layout-text">版权管理</span>
                    </MenuItem>
                    <Submenu name="0">
                        <template slot="title">
                            <Icon type="ios-keypad" :size="24"></Icon>
                            <span class="layout-text">书籍管理</span>
                        </template>
                        <MenuItem name="/bookList">书籍列表</MenuItem>
                        <MenuItem name="/verifyList">审核列表</MenuItem>
                    </Submenu>
                    <MenuItem name="/platform">
                        <Icon type="ios-navigate" :size="24"></Icon>
                        <span class="layout-text">平台管理</span>
                    </MenuItem>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-keypad" :size="24"></Icon>
                            <span class="layout-text">数据统计</span>
                        </template>
                        <MenuItem name="/userData">用户数据</MenuItem>
                        <MenuItem name="/saleData">销售数据</MenuItem>
                    </Submenu>
                    <MenuItem name="/account">
                        <Icon type="ios-navigate" :size="24"></Icon>
                        <span class="layout-text">账户管理</span>
                    </MenuItem>
                    <MenuItem name="/remind">
                        <Icon type="ios-navigate" :size="24"></Icon>
                        <span class="layout-text">断更提醒</span>
                    </MenuItem>
                </Menu>
            </Col>
            <Col span="20">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item v-for="item in $route.matched" :key="item.path">{{item.name}}</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <router-view></router-view>
                </div>
                <div class="layout-copy">
                    2019.4.3 &copy; yuedu
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name:'',
                leftHeight: null,
                loadingShow:false,
            }
        },
        created() {
            this.leftHeightFn();
            window.addEventListener('resize', this.leftHeightFn);
        },
        methods: {
            logOffFn() {
                this.$Modal.confirm({
                    title: '退出登陆',
                    content: '确认要退出登录吗？',
                    onOk: () => {
                        conosle.log(1);
                    },
                });
            },
            MenuClick(res) { //导航跳转
                this.$router.push({path: res});
            },
            leftHeightFn() {    //可视区高度改变
                var H = document.documentElement.clientHeight || document.body.clientHeight;
                this.leftHeight = (H - 62) + 'px';
            }
        }
    }
</script>
<style scoped>
    /* 顶部样式 */
    .username {
        width: 250px;
    }
    .username div {
        margin-top: 5px;
    }
    
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    /* logo */
    .logo{
        height:60px;
        overflow:hidden;
    }
    .logo img{
        height:40px;
        margin:10px 20px;
    }
    /* 面包屑样式 */
    .layout-breadcrumb {
        padding: 10px 15px 0;
    }
    /* content位置 */
    .layout-content {
        min-height: 600px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
    }
    /* 底部版权信息样式 */
    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    /* 导航栏样式 */
    .layout-menu-left {
        background: #fff;
    }
    /* 头部样式 */
    .layout-header {
        line-height: 46px;
        height: 60px;
        background: #4577bc;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }
    /* 修改ui库样式 */
    .ivu-btn-text.active, .ivu-btn-text:active,.ivu-btn-text:hover{
        background-color:transparent;
    }
</style>
