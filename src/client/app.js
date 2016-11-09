import 'thirdparty-imports';

import 'style/main.pcss';

import 'directives';

import Vue from 'vue';
import store from 'app.store';
import router from 'app.routes';
// Route components will be rendered inside <router-view>
new Vue({
    store,
    router,
}).$mount('#app');