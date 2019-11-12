<template>
    <div class="container">
        <index-header></index-header>
        <cart-show :list="Cartshowintro"></cart-show>
    </div>
</template>

<script>
  import IndexHeader from "@/components/index/IndexHeader";
  import CartShow from "@/components/Cartshow/CartShowson";
  import axios from 'axios'

  export default {
    name: "Cartshow",
    components: {
      IndexHeader,
      CartShow
    },
    data(){
      return {
        Cartshowintro:{},
        id:''
      }
    },
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
  };
</script>

<style scoped>


</style>