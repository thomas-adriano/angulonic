const repo = require('./repository');


repo.get('14')
    .then(d => {
        console.log('registro obtido: ' + JSON.stringify(d));
    })
    .catch(console.error);


setTimeout(() => {
    console.log('aguardando...');
}, 10000);