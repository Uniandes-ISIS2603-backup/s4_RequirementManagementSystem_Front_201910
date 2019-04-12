import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CasodeusoService} from '../casodeuso.service';
import { ToastrService } from 'ngx-toastr';
import {CasodeusoDetail} from '../casodeuso-detail';
import { Router } from '@angular/router';


@Component({
  selector: 'app-casodeuso-create',
  templateUrl: './casodeuso-create.component.html',
  styleUrls: ['./casodeuso-create.component.css']
})
export class CasodeusoCreateComponent implements OnInit {

  constructor(private casodeusoService: CasodeusoService,
    private toastrService: ToastrService,
    router: Router) { }

  casodeusoDetail: CasodeusoDetail;

  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();

  createCasodeuso(): CasodeusoDetail {
    console.log(this.casodeusoDetail);
   this.casodeusoService.createCasodeuso(this.casodeusoDetail)
       .subscribe((casodeusoDetail) => {
           this.casodeusoDetail = casodeusoDetail;
           this.create.emit();
           this.toastrService.success("The change was created", "Change creation");
       }, err => {
           this.toastrService.error(err, "Error");
       });
   return this.casodeusoDetail;
}

/**
* Informs the parent component that the user no longer wants to create a change.
*/
cancelCreation(): void {
   this.cancel.emit();
}

  ngOnInit() {
    this.casodeusoDetail = new CasodeusoDetail();
  }

}
