const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const qrCode = require('qrcode-npm');
const repo = require('./repository');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

app.get('/status', (req, res) => {
    res.json({
        status: 'OK'
    });
});

app.get('/generate-qrcode', (req, res) => {
    if (!req.query || !req.query.data) {
        res.json({
            status: 400,
            message: 'Necessário informar dados do qrcode'
        });
        return;
    }

    let data = req.query.data;
    let qrCodeSize = req.query.size
    let qr = qrCode.qrcode(qrCodeSize || 4, 'M');

    if (Array.isArray(data)) {
        let r = data.map(d => {
            qr.addData(d);
            qr.make();
            return {
                imgTag: qr.createImgTag(4),
                data: d
            };
        });
        res.json(r);
    } else {
        qr.addData(data);
        qr.make();
        res.json({
            imgTag: qr.createImgTag(4),
            data: d
        });
    }
});

app.post('/match/:matchId', (req, res) => {
    let matchId = req.params.matchId;
    let data = req.body;
    let errorMsg = '';

    if (!matchId) {
        errorMsg += 'um codigo de partida deve ser informado; '
    }

    if (!data) {
        errorMsg += 'um objeto representando a partida deve ser enviado no corpo do post; '
    }

    if (errorMsg) {
        res.status(400).json({
            msg: errorMsg
        });
        return;
    }

    repo.put(matchId, data)
        .then(r => res.json(r))
        .catch(e => {
            res.status(500).json(e);
        });
});

app.get('/match/:matchId', (req, res) => {
    let matchId = req.params.matchId;
    if (!matchId) {
        res.status(400).json({
            msg: 'um codigo de partida deve ser informado.'
        });
        return;
    }

    repo.get(matchId)
        .then(r => res.json(r))
        .catch(e => {
            res.status(500).json(e);
        });
});

const clientPath = path.resolve(path.resolve(__dirname, '..'), '../dist');
app.use(express.static(clientPath));

app.listen(3000, function() {
    console.log('Started on port 3000');
    console.log('client path: ' + clientPath);
});