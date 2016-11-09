import 'thirdparty-imports';

import 'app.css';
import 'style/utils.css';
import 'style/globals.css';
import 'style/buttons.css';
import 'style/inputs.css';
import 'style/cards.css';

import 'style/resets.css';

import 'directives';

import Vue from 'vue';
import store from 'app.store';
import router from 'app.routes';
// Route components will be rendered inside <router-view>
new Vue({
    store,
    router,
}).$mount('#app');