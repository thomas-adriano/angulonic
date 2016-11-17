import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        targets: [],
        shapes: []
    },
    mutations: {
        addTarget(state, payload) {
            state.targets.push(payload.target);
        },
        removeTarget(state, payload) {
            state.targets = state.targets.filter(t => t !== payload.target);
        },
        addShape(state, payload) {
            if (state.shapes.filter(s => s === payload.shape).length) {
                return;
            }
            state.shapes.push(payload.shape);
        },
        removeShape(state, payload) {
            state.shapes = state.shapes.filter(s => s !== payload.shape);
        },
    },
    getters: {
        getTargets: state => {
            return state.targets;
        },
        getShapes: state => {
            return state.shapes;
        }
    }
})