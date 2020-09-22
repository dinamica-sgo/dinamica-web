import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-approved',
  templateUrl: './qr-approved.component.html',
  styleUrls: ['./qr-approved.component.scss']
})
export class QrApprovedComponent implements OnInit {
  
  public myAngularxQrCode: string = null;
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'Enrique Sisack 12458';
  }
  ngOnInit(): void {
  }

}
