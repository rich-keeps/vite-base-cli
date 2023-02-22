import { createApp } from "vue";
import Pinia from "store/index";
import Route from "route/index";
import App from "./App.vue";
import "normalize.css"; // 初始化css默认样式
import "sty/common.css"; // 公共css样式

const Vue = createApp(App);

Vue.use(Route);
Vue.use(Pinia);

Vue.mount("#app");
