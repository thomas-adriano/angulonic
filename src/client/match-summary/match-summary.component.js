import 'match-summary/match-summary.pcss';
import view from 'match-summary/match-summary.view.html';

export default {
    template: view,
    methods: {
        printQrCodes: function(event) {
            let printContent = '';
            this.$resource('http://localhost:3000/generate-match-targets-qrcode')
                .query({
                    data: this.$route.params.id
                })
                .then((response) => {
                    if (!response.body) {
                        throw new Error('Servidor não retornou a lista de IMG tags');
                    }
                    let tagList = response.body;
                    printContent += tagList.reduce((prev, curr) => {
                        return prev + '<span style="padding:15px;">' + curr.label + '</span>' +
                            '<span style="padding:15px;">' + curr.data + '</span>' + curr.imgTag;
                    }, '');
                    let originalContents = document.body.innerHTML;
                    document.body.innerHTML = printContent;
                    window.print();
                    document.body.innerHTML = originalContents;
                })
                .catch(console.error);
        },
        getMatchQrCode: function() {
            let matchId = this.$route.params.id;
            return this.$resource('http://localhost:3000/generate-match-qrcode')
                .query({
                    data: matchId
                })
                .then((response) => {
                    if (!response.body) {
                        throw new Error('Servidor não retornou a tag IMG do qrcode da partida');
                    }
                    return response.body.imgTag;
                })
                .catch(console.error);
        }
    },
    directives: {
        matchQrCode: {
            inserted: function(el, binding) {
                binding.value.matchQrCode()
                    .then(data => {
                        el.innerHTML = data;
                    });
            }
        }
    },
};