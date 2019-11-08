<template>
    <div>
        <div class="page-header">
            <h1>购物车 <small>订单</small></h1>
        </div>
        <div class="The_order_list">
            <ul>
                <li>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox">
                        </label>
                    </div>

                    <div class="commodity_intro">
                        <img src="https://img10.360buyimg.com/cms/s80x80_jfs/t11497/339/1995038822/38557/1a6cb838/5a0e4fdbN6802ad19.jpg" alt="">
                        <article>
                            PANDORA 潘多拉 闪耀粉色手链绳 590524PCZ-1
                        </article>
                    </div>

                    <div class="commodity_price">
                        <span>￥460.00</span>
                        <span>
                            <div>促销</div>
                            </span>
                        <span>
                            <div>白条12期免息</div></span>
                    </div>

                    <div class="quantity-form">
                        <a href="javascript:;">-</a>
                        <input type="text">
                        <a href="javascript:;">+</a>
                    </div>

                    <div class="total_price">
                        <strong>￥920.00</strong>
                    </div>
                    
                    <div class="p-ops">
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;">移到我的关注</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ShoppingTrolleyson"
  };
</script>

<style lang="scss" scoped>
.The_order_list{
    display: flex;
    min-width: 980px;
    ul{
        width: 100%;
        li{
            padding: 15px 5px;
            width: 100%;
            border: 1px solid black;
            display: flex;
            /*background: #cccccc;*/
            checkbox{
                position: absolute;
                z-index: 3;
                left: 10px;
                top: 0;
                width: 30px;
                min-height: 10px;
            }
            .commodity_intro{
                border: 1px solid red;
                display: flex;
                justify-content: space-around;
                min-width: 300px;
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
                margin-left: 100px;
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
                font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
                -webkit-font-smoothing: antialiased;
                background: #fff;
                border: 1px solid black;
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
        }
    }
}


</style>