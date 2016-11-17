import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shapes: []
    },
    mutations: {
        addShape(state, payload) {
            if (state.shapes.filter(s => s.name === payload.shape.name).length) {
                return;
            }
            state.shapes.push(payload.shape);
        },
        removeShape(state, payload) {
            state.shapes = state.shapes.filter(s => s.name !== payload.shape.name);
        },
    },
    getters: {
        getShapes: state => {
            return state.shapes;
        }
    }
})