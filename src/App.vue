<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
/* 默认样式 */
body,div,ul,li,span,img,input,form{ margin:0; padding:0; }
body,p,h1,h2,h3,h4,h5,h6,ul,ol,dl,li,dd{ margin:0; }
ul,ol,{ padding:0; }
p{ word-wrap:break-word; word-break:normal; }   /*自动换行*/
body{ height:100%; }
a{ text-decoration:none; }
li{ list-style:none; }
img{ border:none 0; }
input{ outline:none; border:none; background:none; }
input,textarea,select{ margin:0; }          
input,textarea{ padding:0; }
input::-ms-clear{display:none; }
/* 浮动公共样式 */
.fl{ float:left; _display:inline; }
.fr{ float:right; _display:inline; }
.clearfix:after{ display:block; content:''; clear:both; }
.clear{ zoom:1; }
/*公共样式*/
.page{ padding-top:30px; }
</style>