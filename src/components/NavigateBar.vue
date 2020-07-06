<template>
  <!-- 顶部的导航条 -->
  <div class="navigate-bar">
    <!-- $router.back()是实例下的属性，可以直接在模板中渲染 -->
    <span class="iconfont iconjiantou2" @click="$router.back()"></span>
    <strong>{{title}}</strong>

    <!-- $router.push()是实例下的属性，可以直接在模板中渲染 -->
    <!-- 如果showHome是true就显示 -->
    <span class="iconfont iconshouye" @click="$router.push('/')" v-if="showHome"></span>

    <!-- 如果showHome是false就显示下面这个span -->
    <!-- v-else指令是必须要接着v-if后面来使用 -->
    <span v-else class="iconfont iconshouye" style="opacity: 0"></span>
  </div>
</template>

<script>
export default {
  // 组件传递，展示的文字和是否展示首页的图标
  // showHome是布尔值，如果传入的true，就显示，如果是false，就隐藏
  props: ["title", "showHome"]
};
</script>

<style scoped lang="less">
.navigate-bar {
  line-height: 48 / 360 * 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20 / 360 * 100vw;
  border-bottom: 1px #eee solid;

  .iconshouye {
    font-size: 20px;
  }
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #fff;
  padding: 10/360 * 100vw 20/360 * 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .comment-input {
    flex: 1;
    margin-right: 20/360 * 100vw;
    height: 30/360 * 100vw;
    padding: 0 20/360 * 100vw;
    line-height: 30/360 * 100vw;
    border-radius: 50px;
    background: #eee;
  }

  .icons {
    position: relative;
    margin: 0 8/360 * 100vw;
    .iconfont {
      font-size: 23px;
    }
    i {
      position: absolute;
      right: -10px;
      top: -5px;
      display: block;
      padding: 1px 2px;
      background: red;
      color: #fff;
      font-size: 10px;
      line-height: 1;
      border-radius: 50px;
    }

    .active {
      color: red;
    }
  }
}
</style>