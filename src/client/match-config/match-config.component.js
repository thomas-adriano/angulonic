import 'match-config/match-config.pcss';
import view from 'match-config/match-config.view.html';
import shapeDirective from 'shapes/shape.directive.js';

export default {
    template: view,
    data: function() {
        return {
            initialShapes: [{
                name: 'rectangle',
                targets: [90, 90, 90, 90]
            }, {
                name: 'triangleEq',
                targets: [60, 60, 60]
            }, {
                name: 'triangleIso',
                targets: [45, 45, 90]
            }, {
                name: 'square',
                targets: [90, 90, 90, 90]
            }],
        }
    },
    computed: {
        choosenShapes() {
            let c = this.$store.getters.getShapes;
            return c;
        },
        availableShapes() {
            let av = this.initialShapes.filter(e => this.$store.getters.getShapes.map(s => s.name).indexOf(e.name) === -1);
            return av;
        }
    },
    directives: {
        shape: shapeDirective
    }
}