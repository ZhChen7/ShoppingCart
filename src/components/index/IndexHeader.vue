<template>
    <div class="header">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">购物车小案例</router-link>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav" >
                        <li v-if="flag"><router-link to="/login" style="color: red">亲，请登录 <span class="sr-only">(current)</span></router-link></li>
                        <li v-else><a href="#" >{{this.$store.state.user.username}}</a></li>
                        <li ><router-link to="/register">免费注册</router-link></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">我的购物车 <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">已买到的宝贝</a></li>
                                <li role="separator" class="divider"></li>

                                <li><a href="#">足迹</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">收藏夹</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">联系客服</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-default"> 搜索 </button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <!--<li><a href="#" v-if="flag">欢迎 {{user.username}}</a></li>-->
                        <li><router-link to="/">首页</router-link></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">管理 <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">个人中心</a></li>
                                <li><a href="#">修改密码</a></li>
                                <li role="separator" class="divider"></li>
                                <li><router-link to="/shoppingtrolley">购物车</router-link></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">退出</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    export default {
        name: "IndexHeader",
        props:{
          user:Object
        },
        data(){
          return{
            flag: true
          }
        },
      watch: {
        $route() {
          if(this.$store.state.existboo.exist){
            this.flag = false
          }
        }
      },
      mounted(){
          console.log(this.$store.state)
            if(this.$store.state.existboo.exist){
              this.flag = false
            }
       }
    }
</script>

<style scoped>

</style>