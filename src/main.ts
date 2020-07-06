// vue构造函数
// import store from "./store/store";
import Vue from "vue";
// App组件（以.vue结尾的文件都是组件）
import App from "./App.vue";
// 路由对象
import router from "./router";
import store from "./store/store";
// 引入vant ui组件库
import Vant, { Toast } from "vant";
// 导入axios
import axios from "axios";

// 保存根实例对象的

// 绑定到原型，加上之后以后就可以在组件中通过this.$axios来调用请求方法
Vue.prototype.$axios = axios;
// 给axios添加基准路径，添加完了之后请求的url就会拼接这个地址
// axios.defaults.baseURL = "http://127.0.0.1:3000"
axios.defaults.baseURL = "http://hmtoutiao-api.atlansic.com";

Vue.use(Vant);

Vue.config.productionTip = false;

// 创建一个根实例
// .$mount('#app') 相当于el配置，指定id为app的元素作为模板
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
