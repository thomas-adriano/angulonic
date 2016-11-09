import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        targets: []
    },
    mutations: {
        addTarget(state, payload) {
            state.targets.push(payload.target);
        }
    },
    getters: {
        getTargets: state => {
            return state.targets;
        }
    }
})