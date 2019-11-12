<template>
    <div>
        <div class="page-header">
            <h1>购物车 <small>订单</small></h1>
        </div>
        <div class="The_order_list">
            <ul>
                <li v-for="(item,index) in list.result" :key="item.id" :class="{selectcss:item.checked}">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" :name="item.id" :value="item.cartcontent" @click="selectid(item,index)">
                        </label>
                    </div>
                    <div class="commodity_intro">
                        <img :src="item.cartimg" alt="">
                        <article>
                            {{item.cartcontent}}
                        </article>
                    </div>

                    <div class="commodity_price">
                        <span>￥{{item.cartprice}}</span>
                        <span>
                            <div>促销</div>
                            </span>
                        <span>
                            <div>白条12期免息</div></span>
                    </div>

                    <div class="quantity-form">
                        <a href="javascript:;" @click="reducenum(index)">-</a>
                        <input type="text" v-model="item.cartnum">
                        <a href="javascript:;" @click="addnum(index)">+</a>
                    </div>

                    <div class="total_price">
                        <strong>￥{{item.cartnum * item.cartprice}}</strong>
                    </div>
                    
                    <div class="p-ops">
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;">移到我的关注</a>
                    </div>
                </li>
            </ul>
        </div>

        <div class="cash_settlement">
            <div class="comm-left">
                <div class="select-all">
                    <div class="quanxuan">
                        <input type="checkbox" id="quanxuan"> <label for="quanxuan">全选</label>
                    </div>
                </div>
                <div class="operation">
                    <a href="">删除选中商品</a>
                    <a href="">移到关注</a>
                    <a href="">清理购物车</a>
                </div>
            </div>
                <div class="comm-right" >
                    <div class="btn-area">
                        <a href="javascript:;" class="btn btn-lg btn-danger">去结算</a>
                    </div>
                    <div class="price-sum">
                        <div>总价：<span class="price-sum-num">￥{{totalsum}}</span></div>
                        <span>促销：-￥0.00</span>
                    </div>
                    <div class="amount-sum">
                        已选中 <span>0</span> 件商品
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ShoppingTrolleyson",
    props:{
      list:Object
    },
    data(){
      return {
        ind:-1,
        sum:[],
        totalsum:0
      }
    },
    watch: {
      '$route' (to) {
       console.log(to)
      }
    },
    // beforeUpdate(){
    //   this.cartnum=this.list.result[0].cartnum
    //   this.price =this.list.result[0].cartprice
    //   this.totalprice=this.cartnum * this.price
    // },
    activated(){
      this.totalsum=0
    },
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

        this.list.result.forEach((item) =>{
            console.log(item.id)
        })

        this.sum.forEach((item) =>{
          tprice+=item.price
        })
        this.totalsum = tprice
        console.log(tprice)
      }
    }
  };
</script>

<style lang="scss" scoped>
.The_order_list{
    display: flex;
    min-width: 1100px;
    ul{
        width: 100%;
        li{
            padding: 15px 5px;
            width: 100%;
            border-top: 1px solid #f1f1f1;
            display: flex;
            /*background: #cccccc;*/
            margin-top: 5px;
            checkbox{
                position: absolute;
                z-index: 3;
                left: 10px;
                top: 0;
                width: 30px;
                min-height: 10px;
            }
            .commodity_intro{
                display: flex;
                justify-content: space-around;
                min-width: 427px;
                img{
                    width: 82px;
                    height: 82px;
                }
                article{
                    color: #333;
                    height: 40px;
                    line-height: 20px;
                    overflow: hidden;
                    padding: 0 0 1px 10px;
                    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
                    -webkit-font-smoothing: antialiased;
                }
            }
            .commodity_price{
                width: 150px;
                font-family: verdana;
                text-align: right;
                padding: 0px 0 10px;
                margin-left: 200px;
                span{
                    display: block;
                    cursor: pointer;
                    line-height: 20px;
                    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
                    -webkit-font-smoothing: antialiased;
                    /*background: #fff;*/
                    margin-top: 3px;
                }
                span:nth-of-type(1){
                    margin-top: 0px;
                }
                span:nth-of-type(2),span:nth-of-type(3){
                    color: #E2231A;
                    div{
                        border: 1px solid #f9d2d3;
                        display: inline-block;
                        padding: 0 7px;
                    }
                }
                span:nth-of-type(3){
                    margin-top: 4px;
                }
            }
            .quantity-form{
                position: relative;
                overflow: hidden;
                height: 22px;
                width: 80px;
                min-width: 80px;
                font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
                -webkit-font-smoothing: antialiased;
                background: #fff;
                /*border: 1px solid black;*/
                margin-left: 50px;
                padding-right: 4px;
                input{
                    position: absolute;
                    left: 17px;
                    top: 0;
                    border: 1px solid #cacbcb;
                    width: 42px;
                    height: 18px;
                    line-height: 18px;
                    text-align: center;
                    padding: 1px;
                    margin: 0;
                    font-size: 12px;
                    font-family: verdana;
                    color: #333;
                    -webkit-appearance: none;
                }
                a:nth-of-type(1){
                    float: left;
                    border: 1px solid #cacbcb;
                    border-right: 0;
                    height: 18px;
                    line-height: 18px;
                    width: 16px;
                    text-align: center;
                    color: #666;
                    margin: 0;
                    background: #fff;
                }
                a:nth-of-type(2){
                    float: right;
                    color: #666;
                    border: 1px solid #cacbcb;
                    height:18px;
                    line-height: 18px;
                    width: 16px;
                    text-align: center;
                    margin: 0;
                    background: #fff;
                }

            }
            .total_price{
                width: 100px;
                padding-right: 40px;
                text-align: right;
                font-family: verdana;
                padding: 0px 0 10px;
                strong{
                    color: #333;
                    font-weight: 700;
                    display: block
                }
            }
            .p-ops{
                position: relative;
                padding: 15px 0 10px 80px;
                font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
                -webkit-font-smoothing: antialiased;
                a{
                    color: #666;
                    display: block;
                    line-height: 20px;
                }
            }
        }
    }
}

.cash_settlement{
    padding: 0 5px;
    min-width: 1100px;
    border: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    .comm-left{
        display: flex;
        .select-all{
            height: 18px;
            line-height: 18px;
            padding: 16px 0 16px 9px;
            white-space: nowrap;
            .quanxuan{
                position: relative;
                z-index: 3;
                float: left;
                margin-right: 5px;
                label{
                    position: relative;
                    top: -3px;
                    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
                    -webkit-font-smoothing: antialiased;
                }
            }
        }
        .operation{
            height: 50px;
            width: 310px;
            line-height: 50px;
            a{
                float: left;
                margin-left: 5px;
                color: #666;
                line-height: 50px;
            }
            a:hover{
                color: red;
            }
            a:nth-of-type(3){
                font-weight: 700;
            }
        }
    }
    .comm-right{
        width: 720px;
        display: flex;
        flex-direction: row-reverse;
        .btn-area{
            padding-top: 2px;
        }
        .price-sum{
            height: 43px;
            line-height: 20px;
            margin: 5px 5px 0 10px;
            color: #666;
            width: auto;
            position: relative;
            margin-right: 15px;
            div{
              span{
                  font-size: 16px;
                  color: #E2231A;
                  font-weight: 700;
              }
            }
        }
        .amount-sum{
            color: #999;
            height: 44px;
            line-height: 20px;
            margin: 7px 0 0;
            cursor: pointer;
            span{
                color: #E2231A;
                font-family: verdana;
                font-weight: 700;
                margin: 0 3px;
            }
        }
    }
}


    /*.selectcss{*/
        /*background: #FFF4E8;*/
        /*!*background: #000;*!*/
    /*}*/
/*input[type="checkbox"]:checked{*/
    /*background: #FFF4E8;*/
    /*border: 1px solid black;*/
/*}*/

</style>