import 'match-config/match-config.css';
import view from 'match-config/match-config.view.html';

export default {
    template: view,
    computed: {
        targets() {
            return this.$store.getters.getTargets;
        }
    }
}