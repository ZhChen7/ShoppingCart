<template>
  <div class="home container">
    <index-header :user="user"/>
    <index-list :list="indexlist"></index-list>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexHeader from "@/components/index/IndexHeader";
import IndexList from "@/components/index/IndexList";
import axios from 'axios'

export default {
  name: "home",
  components: {
    IndexHeader,
    IndexList
  },
  data(){
    return {
      indexheader:[],
      indexlist:{},
      user:{}
    }
  },
  watch: {
    $route() {
      this.getHomeInfo()
    }
  },
  mounted(){
    this.getHomeInfo()
  },
  methods:{
    getHomeInfo(){
      axios.get('/api')
              .then((res) =>this.getHomeInfoSucc(res))
    },
    getHomeInfoSucc(res){
      console.log(res)
      if(res.data){
          this.indexlist =res.data
          this.user= res.data.user
          this.$store.commit('adduser',res.data.user)
        }
      }
      // console.log(this.indexlist)
    }
};
</script>
