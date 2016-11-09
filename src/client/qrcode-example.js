var el = document.getElementById('qrcode-target');

var req = new XMLHttpRequest();

console.log('carregou js');

var req = new XMLHttpRequest();
req.addEventListener("load", function() {
    var textHtml = JSON.parse(req.response).html;
    console.log('qrcode text: ' +
        textHtml);
    el.innerHTML = textHtml;
});
req.open("GET", "http://localhost:3000/qrcode?data=100100&size=8");
req.send();