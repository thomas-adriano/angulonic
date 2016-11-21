import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'login/login.component';
import MainMenu from 'main-menu/main-menu.component';
import MatchConfig from 'match-config/match-config.component';
import MatchSummary from 'match-summary/match-summary.component';
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: Login
    }, {
        path: '/main-menu',
        component: MainMenu
    }, {
        path: '/match',
        component: MatchConfig
    }, {
        path: '/match/:id',
        component: MatchSummary
    }]
});
