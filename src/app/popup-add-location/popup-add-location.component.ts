import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Weather } from '../weather';


@Component({
  selector: 'app-popup-add-location',
  templateUrl: './popup-add-location.component.html',
  styleUrls: ['./popup-add-location.component.scss']
})
export class PopupAddLocationComponent implements OnInit {

  closeResult = '';

  constructor(
    private modalService: NgbModal,
  ) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, );
  }

  ngOnInit(): void {
  }

}
