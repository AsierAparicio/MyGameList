import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html'
})
export class QrComponent implements OnInit{

  qrCodeImage: string = '';

  ngOnInit() {
    const currentUrl = window.location.href;
    QRCode.toDataURL(currentUrl)
      .then((url: string) => {
        this.qrCodeImage = url;
      })
      .catch((error: any) => {
        console.error('Error generating QR code:', error);
      });
  } 
}
