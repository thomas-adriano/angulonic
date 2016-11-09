import 'match-config/match-config.pcss';
import view from 'match-config/match-config.view.html';

export default {
    template: view,
    computed: {
        targets() {
            return this.$store.getters.getTargets;
        }
    }
}