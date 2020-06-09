import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-maps',
  templateUrl: './modal-maps.component.html',
  styleUrls: ['./modal-maps.component.css']
})
export class ModalMapsComponent implements OnInit {

  lat= 51.678418;
  lng= 7.809007;

  constructor() { }

  ngOnInit(): void {
  }

}
