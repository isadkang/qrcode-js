const fs = require('fs');
const qr = require('qrcode');

const linkToQr = "https://github.com/isadkang";

const timestamp = new Date().getTime();
const randomFilename = `qrcode_${timestamp}.png`;

const outputFile  =`./output/${randomFilename}`;

qr.toFile(outputFile, linkToQr, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Mohon menunggu...');
        setTimeout(() => {
            console.log(`QR Code berhasil disimpan ke ${outputFile}`);
        }, 3000);
    }
})