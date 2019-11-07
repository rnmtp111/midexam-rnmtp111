// 題目說明: 請使用套件readline-sync跟node-qrcode，輸入文字來產生QRCODE
// 輸入說明: 請打上任意文字，並產生QRCODE
// 輸出說明: 請輸出檔名為QRCODE.png圖片

import * as QRCode from 'qrcode';
import * as readlineSync from 'readline-sync';
let x = readlineSync.question();
QRCode.toFile('./QRCODE.png', x)