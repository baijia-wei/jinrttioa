<template>
  <div class="container">
    <!-- 返回上一页按钮 -->
    <div class="back-btn">
      <span class="iconfont iconicon-test"></span>
    </div>

    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <!-- 使用vant的表单 -->
    <!-- 登录 -->
    <!-- van-form是表单的组件， @submit是表单按钮提交的事件 -->
    <van-form class="form">
      <!-- van-field是表单的字段 -->
      <!-- rules是表单字段的规则，required表示这个输入框是必填 -->
      <van-field v-model="ruleForm.username" name="手机号码" placeholder="手机号码" />
      <!-- 密码输入框，和上面的属性是一样的 -->
      <van-field v-model="ruleForm.password" type="password" name="密码" placeholder="密码" />
      <div>
        <!-- 如果这个按钮是在van-form组件内部，
        并且按钮的native-type="submit"，说明点击这个按钮就会触发submit事件-->
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click.native.prevent="handleSubmit"
        >登录</van-button>
      </div>
    </van-form>
    <!-- 注册 -->
    <router-link to="/register">
      <van-button round block class="link-register">注册</van-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
// 他会操作Action到了Action操作Mutation Mutation 调用Getter方法拿到 State
// 进行赋值保存
import { State, Getter, Mutation, Action } from "vuex-class";

export default class Logoin extends Vue {
  // 存储用户信息
  @Action("setUser") setUser: any;
  // 数据保存
  @Provide() ruleForm: {
    username: String;
    password: String;
  } = {
    username: "",
    password: ""
  };

  handleSubmit(): void {
    // console.log("12312", this.ruleForm);
    (this as any)
      .$axios({
        url: "/login",
        method: "POST",
        data: this.ruleForm
      })
      .then((res: any) => {
        console.log(res);
        const { message, data } = res.data;
        // 存到本地
        localStorage.setItem("tsToken", data.token);
        const list = JSON.stringify(data);

        localStorage.setItem("userInfo", list);
        // console.log("登录成功");

        // this.$toast.success("登录成功");
        // 存到vuex中
        this.setUser(data.token);
        this.$router.replace("/personal");
      });
  }
}
</script>

<style lang="less" scoped>
// scoped属性表示样式只针对当前的组件有效
.container {
  padding: 20 / 360 * 100vw;
}

// 样式会被iconfont覆盖的，所以要选中span
.back-btn span {
  font-size: 27 / 360 * 100vw;
  line-height: 1;
}

.logo {
  text-align: center;
  margin-top: 20 / 360 * 100vw;
}

.logo span {
  font-size: 126 / 360 * 100vw;
  color: #cc3300;
}

.form {
  .van-cell {
    padding: 10px 0;
    font-size: 16px;
    margin-bottom: 20 / 360 * 100vw;
  }

  .van-cell:not(:last-child)::after {
    border-bottom: 1px solid #333;
    left: 0;
  }

  .van-button--info {
    margin-top: 50 / 360 * 100vw;
    background-color: #cc3300;
    border: 1px solid #cc3300;
  }
}

.link-register {
  margin-top: 20 / 360 * 100vw;
}
</style>


functiona a(b){
  xxx
  b()
}

@a
function b(){}

b()
