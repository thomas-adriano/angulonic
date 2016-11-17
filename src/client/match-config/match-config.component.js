import 'match-config/match-config.pcss';
import view from 'match-config/match-config.view.html';
import shapeDirective from 'shapes/shape.directive.js';

export default {
    template: view,
    data: function() {
        return {
            initialShapes: ['square', 'rectangle', 'triangleEq', 'triangleIso'],
        }
    },
    computed: {
        choosenShapes() {
            let c = this.$store.getters.getShapes;
            return c;
        },
        availableShapes() {
            let av = this.initialShapes.filter(e => this.$store.getters.getShapes.indexOf(e) === -1);
            return av;
        }
    },
    directives: {
        shape: shapeDirective
    }
}