import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DummyService } from '../../../services/dummy.service';


@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  constructor( private dummyService: DummyService) { }

  ngOnInit(): void {
  }

}
