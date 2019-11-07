<template>
    <div>
        <div class="IndexList">
            <ul>
                <li>
                    <router-link to="/cartshow">
                        <header>
                            <img src="https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/54615/20/15153/333535/5dc286a8Ee03e26d1/1246169644375261.jpg.webp" alt="">
                        </header>
                        <div class="list_intro">狄豪（DIHAO）沙发 沙发客厅整装现代简约布艺沙发 客厅皮布组合沙发8043沙发 双人+贵妃+单人【3.47米】</div>
                        <footer>
                            <span>￥2050.00</span>
                            <div>卷</div>
                        </footer>
                    </router-link>
                </li>
                <li>
                    <a href="">
                        <header>
                            <img src="https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/54615/20/15153/333535/5dc286a8Ee03e26d1/1246169644375261.jpg.webp" alt="">
                        </header>
                        <div class="list_intro">狄豪（DIHAO）沙发 沙发客厅整装现代简约布艺沙发 客厅皮布组合沙发8043沙发 双人+贵妃+单人【3.47米】</div>
                        <footer>
                            <span>￥2050.00</span>
                            <div>卷</div>
                        </footer>
                    </a>
                </li>
                <li>
                    <a href="">
                        <header>
                            <img src="https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/54615/20/15153/333535/5dc286a8Ee03e26d1/1246169644375261.jpg.webp" alt="">
                        </header>
                        <div class="list_intro">狄豪（DIHAO）沙发 沙发客厅整装现代简约布艺沙发 客厅皮布组合沙发8043沙发 双人+贵妃+单人【3.47米】</div>
                        <footer>
                            <span>￥2050.00</span>
                            <div>卷</div>
                        </footer>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexList"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/resetcss/reset.css";
.IndexList {
    /*border: 1px solid black;*/
    background: #F4F4F4;
    padding: 22px 0 10px 0;
    ul{
        display: flex;
        flex-wrap: wrap;
        /*border: 2px solid royalblue;*/
        padding-left: 65px;
        li{
            width: 190px;
            height: 266px;
            /*border: 1px solid red;*/
            margin:  0 5px 8px;
            background: #fff;
            a{
                display: block;
                header{
                    width: 120px;
                    height: 120px;
                    margin: 30px auto;
                    img{
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
                .list_intro{
                    /*border: 1px solid black;*/
                    font-size: 12px;
                    line-height: 20px;
                    height: 40px;
                    text-align: left;
                    color: #666;
                    transition: color .2s ease;
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    padding: 0 10px;
                }
                footer{
                    padding: 15px 10px;
                    display: flex;
                    justify-content: space-between;
                    span{
                        display: inline-block;
                        font-size: 16px;
                        line-height: 18px;
                        height: 18px;
                        color: #e1251b;
                    }
                    div{
                        font-size: 12px;
                        color: #e1251b;
                        height: 16px;
                        padding: 0 6px;
                        border: 1px solid #e1251b;
                        line-height: 14px;
                        border-radius: 2px;
                        text-align: center;
                        display: inline-block;
                        margin-left: 10px;
                        vertical-align: 1px;
                    }
                }
            }

        }
    }
}


</style>