import 'thirdparty-imports';
import 'style/index.js';

import 'directives';
import VueResource from 'vue-resource';
import Vue from 'vue';
import store from 'app.store';
import router from 'app.routes';
// Route components will be rendered inside <router-view>

Vue.use(VueResource);

new Vue({
    store,
    router,
}).$mount('#app');