<template>
    <div class="container">
        <index-header></index-header>
        <shopping-trolley1 :list="ShoppingTrolleyinto" @func1="addnum" @func2="reducenum"></shopping-trolley1>
    </div>
</template>

<script>
  import ShoppingTrolley1 from "@/components/ShoppingTrolley/ShoppingTrolleyson";
  import IndexHeader from "../components/index/IndexHeader";
  import axios from 'axios'
  export default {
    name: "ShoppingTrolley",
    components:{
      IndexHeader,
      ShoppingTrolley1
    },
    data(){
      return {
        ShoppingTrolleyinto:{}
      }
    },
    mounted(){
      this.getHomeInfo()
    },
    watch: {
      '$route' (to) {
        this.getHomeInfo()
      }
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/Getcartdata')
          .then((res) =>this.getHomeInfoSucc(res))
      },
      getHomeInfoSucc(res){
        console.log(res.data)
        if(res.data){
          this.ShoppingTrolleyinto = res.data
        }
        // console.log(this.ShoppingTrolleyinto)
      },
      addnum(index){
        this.ShoppingTrolleyinto.result[index].cartnum++
      },
      reducenum(index){
        if(this.ShoppingTrolleyinto.result[index].cartnum>0){
          this.ShoppingTrolleyinto.result[index].cartnum--
        }
        return
      }
    }
  };
</script>

<style scoped>

</style>