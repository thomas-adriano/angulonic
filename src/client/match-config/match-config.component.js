import 'match-config/match-config.pcss';
import view from 'match-config/match-config.view.html';
import square from 'shapes/square.component.vue';
import rectangle from 'shapes/rectangle.component.vue';
import triangleEq from 'shapes/triangle-eq.component.vue';
import triangleIso from 'shapes/triangle-iso.component.vue';

export default {
    template: view,
    components: {
        square,
        rectangle,
        triangleEq,
        triangleIso
    },
    data: {
    	initialShapes: ['square', 'rectangle', 'triangleEq', 'triangleIso'],
    },
    computed: {
        choosenShapes() {
            return this.$store.state.getShapes
        },
        availableShapes() {
        	return this.initialShapes.filter(e => this.$store.state.getShapes.indexOf(e) !== -1);
        }
    },
  	directives: {
  		shapes: {
  			inserted: () => {

  			}
  		}
  	}
}