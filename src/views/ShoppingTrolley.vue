<template>
    <div class="container">
        <index-header></index-header>
        <shopping-trolley1></shopping-trolley1>
    </div>
</template>

<script>
  import ShoppingTrolley1 from "@/components/ShoppingTrolley/ShoppingTrolleyson";
  import IndexHeader from "../components/index/IndexHeader";
  export default {
    name: "ShoppingTrolley",
    components:{
      IndexHeader,
      ShoppingTrolley1
    }
  };
</script>

<style scoped>

</style>