<template>
    <div>
      <div class="CartShowson">
          <div class="CartShowson_left">
              <img src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/99273/27/512/381561/5dafccb1E70e905ec/d4fe45cbc1e0b231.jpg" alt="">
              <div>
                  其它小图片
              </div>
          </div>
          <div class="CartShowson_right">
                <header>
                    <img src="https://img13.360buyimg.com/devfe/jfs/t4636/72/1687629000/219/64a7daf7/58e44c0fN9f20107c.png" alt="">
                    华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+128GB亮黑色5G全网通版
                </header>
              <footer>
                  <div class="cart_num">
                      <input type="text" value="0" autofocus>
                      <a href="javascript:;">+</a>
                      <a href="javascript:;">-</a>
                  </div>
                  <div class="qianggou">
                      <a href="" class="btn btn-lg btn-danger">抢购</a>
                  </div>
              </footer>
          </div>

      </div>
    </div>

</template>

<script>
  export default {
    name: "CartShowson"
  };
</script>

<style lang="scss" scoped>
    @import "../../assets/resetcss/reset.css";
.CartShowson{
    /*border: 1px solid black;*/
    height: 530px;
    display: flex;
    justify-content: space-between;
    min-width: 1000px;
    .CartShowson_left{
        width: 452px;
        min-width: 452px;
        img{
            width: 100%;
            display: block;
            border: 1px solid silver;
        }
        div{
           /*text-align: center;*/
            /*padding-top: 30px;*/
            border:1px solid #ccc;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .CartShowson_right{
        width: 738px;
        padding: 5px 8px;
        min-width: 500px;
        header{
            /*border: 1px solid black;*/
            font: 700 16px Arial,"microsoft yahei";
            color: #666;
            padding-top: 10px;
            line-height: 28px;
            margin-bottom: 5px;
        }
        footer{
            height: 450px;
            display: flex;
            justify-content: center;
            align-items: center;
            .cart_num{
                width: 58px;
                height: 44px;
                overflow: hidden;
                border: 1px solid #ccc;
                position: relative;
                /* margin-right: 10px; */
                float: left;
                input{
                    display: block;
                    width: 43px;
                    height: 42px;
                    line-height: 42px;
                    position: absolute;
                    top: 1px;
                    left: 0;
                    border: 0;
                    text-align: center;
                }
                a{
                    display: block;
                    width: 15px;
                    text-align: center;
                    height: 22px;
                    line-height: 22px;
                    overflow: hidden;
                    background: #f1f1f1;
                    border: 1px solid #ccc;
                    color: #ccc;
                    position: absolute;
                    right: -1px;
                }
                a:nth-of-type(1){
                    top: -1px;
                }
                a:nth-of-type(2){
                    top: 20px;
                }
                a:hover{
                   text-decoration: none;
                }
            }
            .qianggou{
                margin-left: 15px;
            }
        }
    }
}

</style>