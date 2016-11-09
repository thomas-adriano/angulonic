import Vue from 'vue';
import store from 'app.store.js';

Vue.directive('selectize', {
    inserted: function(el) {
        $(el).selectize({
            delimiter: ',',
            plugins: ['remove_button'],
            highlight: true,
            persist: false,
            maxItems: null,
            valueField: 'value',
            labelField: 'text',
            searchField: ['text'],
            options: getItems(),
            onItemAdd: (value, $item) => {
                let payload = {
                    target: value
                };
                store.commit('addTarget', payload);
            },
            onItemRemove: (value) => {
                let payload = {
                    target: value
                };
                store.commit('removeTarget', payload);
            }

        });
    }
});

function getItems() {
    let res = [];
    for (let i = 0; i <= 360; i++) {
        res[i] = {
            text: i,
            value: i
        };
    }
    return res;
}