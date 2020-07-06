import { ActionTree } from "vuex";
import jwt_decode from "jwt-decode";

const actions: ActionTree<any, any> = {
  async setUser({ state, commit }, user: any) {
    const decoded: any = jwt_decode(user);
    commit("SET_USER", decoded);

    // 返回当前用户拥有权限的路由
  },

};


export default actions;
