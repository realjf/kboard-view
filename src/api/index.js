import * as api_login from './login'
import * as api_user from './user'

// login模块
// 调用使用this.$api.api_login.login().then(resp=>{}).catch(()=>{})
const apiObj = {
  api_login,
  api_user
};

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiObj
      }
    }
  })
};
export default {
  install
}

