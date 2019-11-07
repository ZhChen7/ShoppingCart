<template>
  <div class="home container">
    <index-header/>
    <index-list></index-list>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexHeader from "@/components/index/IndexHeader";
import IndexList from "@/components/index/IndexList";

export default {
  name: "home",
  components: {
    IndexHeader,
    IndexList
  }
};
</script>
