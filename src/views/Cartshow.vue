<template>
    <div class="container">
        <index-header></index-header>
        <cart-show></cart-show>
    </div>
</template>

<script>
  import IndexHeader from "@/components/index/IndexHeader";
  import CartShow from "@/components/Cartshow/CartShowson";

  export default {
    name: "Cartshow",
    components: {
      IndexHeader,
      CartShow
    }
  };
</script>

<style scoped>


</style>