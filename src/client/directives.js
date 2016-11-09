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
    console.log('items: ' + res);
    return res;
}