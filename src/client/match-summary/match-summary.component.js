import 'match-summary/match-summary.pcss';
import view from 'match-summary/match-summary.view.html';
export default {
    template: view,
    computed: {
        targets() {
            return this.$store.getters.getTargets;
        }
    }
};

function print() {
    var printContents = 'TEXT HTML CONTENT HERE';
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}