const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const qrCode = require('qrcode-npm')

app.use(cors());

app.get('/qrcode', (req, res) => {
    if (!req.query || !req.query.data) {
        res.json({
            status: 400,
            message: 'Necessário informar dados do qrcode'
        });
        return;
    }
    let qrCodeSize = req.query.size
    let qr = qrCode.qrcode(qrCodeSize || 4, 'M');
    qr.addData(req.query.data);
    qr.make();

    res.json({
        html: qr.createImgTag(4)
    });
})

const clientPath = path.resolve(path.resolve(__dirname, '..'), '../dist');

app.use(express.static(clientPath));

app.listen(3000, function() {
    console.log('Started on port 3000');
    console.log('client path: ' + clientPath);
})