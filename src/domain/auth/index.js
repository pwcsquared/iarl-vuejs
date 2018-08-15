export default function(Vue) {
  Vue.auth = {
    setToken(token) {
      localStorage.setItem("token", token);
    },
    getToken() {
      const token = localStorage.getItem("token");
      return token ? token : null;
    },
    isAuthenticated() {
      return !!this.getToken();
    }
  };

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth;
      }
    }
  });
}
