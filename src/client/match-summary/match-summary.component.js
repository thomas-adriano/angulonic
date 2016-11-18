import 'match-summary/match-summary.pcss';
import view from 'match-summary/match-summary.view.html';


export default {
    template: view,
    computed: {
        targets() {
            return 0;
        }
    },
    methods: {
        printQrCodes: function(event) {
            this.$resource('http://localhost:3000/generate-qrcode')
                .query({
                    data: 0
                })
                .then((response) => {
                    if (!response.body) {
                        throw new Error('Servidor não retornou a lista de IMG tags');
                    }
                    let tagList = response.body;
                    let printContent = tagList.reduce((prev, curr) => prev + '<span style="padding:15px;">' + curr.data + '</span>' + curr.imgTag, '');
                    let originalContents = document.body.innerHTML;
                    document.body.innerHTML = printContent;
                    window.print();
                    document.body.innerHTML = originalContents;
                })
                .catch(console.error);
        }
    }
};