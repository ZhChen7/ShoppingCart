## 购物车

> 大三web课 期末实训 --- 购物车
>
> 创建时间： 2019/11/04
>
> 完成时间：
>
> 作者 ：周琛 



------

> 本项目 采用 **前后端分离** ，本人 同时撰写 客户端（vue.js）和服务端（node.js）代码（数据库 采用：mysql）

------



### 技术栈

**前端** ：HTML5、CSS3、Sass、ES6(7|8)、Webpack4、Vue CLI 3、Vue.JS2.6.10、Vuex3.0.1、Vue Router3.1.3、Axios0.19.0

**后端** ：Node.js（express ）、MySQL



### 说明

这个作品 分为 客户端 和服务端2 个目录文件 ---  >  需要 **分别 运行** 。



### 亮点：

优势：前后端分离

前端目录：（vuecli3 构建 、技术：vue） 

**启动**  ： `npm run serve`    **运行端口：** 8080

![mark](http://static.zxinc520.com/blog/20191111/rdRGbyJ0fECo.png?imageslim)

服务端目录：（node.js , 使用框架 express）

**启动**   ： `node app.js`    **运行端口：** 3000

![mark](http://static.zxinc520.com/blog/20191111/B86rA0wyyJaP.png?imageslim)



## 解决难题汇总

1. 使用 vuecli3 构建项目时 sass 的选择问题 

   

2. 使用 bootstrap ， 再vue项目中 使用 bs 的问题 （建议：尽量用 vue的ui框架，如：Element、Vuetify等...）

   

3. 前后端 交互式 ， 同源策略 的问题

   解决方案： <u>**proxy**</u> 

   - 根目录下 建立 `vue.config.js` 文件

   ~~~js
   const webpack = require("webpack");
   
   module.exports = {
     devServer: {
       proxy: {
         '/api': { 
           target: 'http://192.168.1.109:3000/', //对应自己的接口
           changeOrigin: true,
           ws: true,
           pathRewrite: {
             '^/api': ''
           }
         }
       }
     },
     configureWebpack: {
       plugins: [
         new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery',
           Popper: ['popper.js', 'default']
         })
       ]
     }
   }
   ~~~



4. 监听 路由变化 问题

   >   mounted() 和  watch 方法 **配合使用**  的使用

~~~js
 mounted(){
      this.id = this.$route.params.id
      this.getHomeInfo(this.id)
      this.id=null
    },
    watch: {
      '$route' () {
        this.id = this.$route.params.id
        if(!this.id){
            return
        }
        this.getHomeInfo(this.id)
      }
    },
~~~



5. 连接  mysql

~~~js
const mysql = require('mysql');

//执行数据操作、 封装、暴露方法
module.exports = {
    query: function (sql, params, callback) {
        //1.创建链接
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'threeweb'
        });
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    }
};
~~~



6.  使用 `axios`  （ 类似于  ajax ）

~~~js
import axios from 'axios'

    mounted(){
      this.id = this.$route.params.id
      this.getHomeInfo(this.id)
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/his?',{
          params:{
            id:this.id
          }
        })
          .then((res) =>this.getHomeInfoSucc(res))
      },
      getHomeInfoSucc(res){
        // console.log(res.data)
        if(res.data){
          this.Cartshowintro = res.data
        }
        console.log(this.Cartshowintro)
      }
    }
~~~



7. **注意：**  子组件 无法修改 父组件传来的值（ props里面的值无法修改 ）

   解决方案： 可以通过 触发 （$emit  ） 来解决 父子组件间传值的问题

   ~~~js
   addnum(index){
       this.$emit('func1',index)
   }
   ~~~

   



8. 结算 页面 复杂逻辑

![mark](http://static.zxinc520.com/blog/20191111/vSHcHBnDpznc.png?imageslim)

~~~js
 methods:{
      addnum(index){
        this.$emit('func1',index)
        this.selectid(this.list.result[index],index,true)
      },
      reducenum(index){
        this.$emit('func2',index)
        this.selectid(this.list.result[index],index,true)
      },
      selectid(key,index,numflag){
        let tprice=0

        if (!key.isChecked) {
          if(numflag){
            return
          }

          this.$set(key, 'isChecked', true);
          var obj={
            id:key.id,
            price: key.cartnum * key.cartprice
          }

          this.sum.push(obj)
          console.log(this.sum)

          this.sum.forEach((item) =>{
            tprice+=item.price
          })

          this.totalsum = tprice
          // console.log(tprice)
          return;
        }

        if(numflag){
          this.sum[index].price =  key.cartnum * key.cartprice
          this.sum.forEach((item) =>{
            tprice+=item.price
          })
          this.totalsum = tprice
          return
        }

        console.log(index)
        key.isChecked = !key.isChecked
        this.sum.splice(index,1)
        console.log(this.sum)


        this.sum.forEach((item) =>{
          tprice+=item.price
        })
        this.totalsum = tprice
        console.log(tprice)
      }
    }
~~~



9. 解决 用户 登录 注册成功后 跳转到 首页的 相关显示问题

   > 解决方案 ： vuex



## 效果

![mark](http://static.zxinc520.com/blog/20191112/l5xWkSkLP3CA.png?imageslim)

![mark](http://static.zxinc520.com/blog/20191112/bazsjPcQ7KRi.png?imageslim)



![mark](http://static.zxinc520.com/blog/20191112/Hqgi1rPE3asg.gif)

![mark](http://static.zxinc520.com/blog/20191112/KjYrc9o8jwSM.png?imageslim)

![mark](http://static.zxinc520.com/blog/20191112/m85Et6lrhM9l.png?imageslim)

