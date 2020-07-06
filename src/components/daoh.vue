<template>
  <div class="navigate-bar">
    <span class="iconfont iconjiantou2" @click="$router.back()"></span>
    <span>{{title}}</span>
    <span class="iconfont iconshouye" @click="$router.push('/')" v-if="showHome"></span>
    <!-- v-else必须接着<v-eles></v-eles> -->
    <span v-else></span>
  </div>
</template>

<script>
export default {
  props: ["title", "showHome"]
};
</script>

<style lang="less" scoped>
.navigate-bar {
  line-height: 48/360 * 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconshouye {
    font-size: 20px;
  }
}
</style>