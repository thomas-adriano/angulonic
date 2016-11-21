import 'match-config/match-config.pcss';
import view from 'match-config/match-config.view.html';
import shapeDirective from 'shapes/shape.directive.js';
import router from '../app.routes';
import bs58 from 'bs58';

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
    methods: {
        generateMatch: function() {
            let navVer = navigator.appVersion;
            let toEncode = this.getRandomInt(0, 10000) + navVer + JSON.stringify(this.$store.getters.getShapes);
            let encoded = bs58.encode(toEncode.split(''));
            let matchId = encoded.substring(0, 6);

            this.$resource('http://localhost:3000/match{/matchId}')
                .save({
                    matchId
                }, {
                    id: matchId,
                    shapes: this.$store.getters.getShapes
                })
                .then((response) => {
                    console.log('match ' + JSON.stringify(response.body) + ' registrado com sucesso!');
                })
                .catch(console.error);

            router.push({
                path: '/match/' + matchId
            });
        },
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    },
    directives: {
        shape: shapeDirective
    }
}