import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CasodeusoService} from '../casodeuso.service';
import { ToastrService } from 'ngx-toastr';
import {CasodeusoDetail} from '../casodeuso-detail';
import { Router } from '@angular/router';

/**
 * Component that creates a new case of use
 */
@Component({
  selector: 'app-casodeuso-create',
  templateUrl: './casodeuso-create.component.html',
  styleUrls: ['./casodeuso-create.component.css']
})
export class CasodeusoCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param casodeusoService The case's service provider
    * @param toastrService The toastr to show messages to the user 
    * @param router The router of the component
    */
  constructor(private casodeusoService: CasodeusoService,
    private toastrService: ToastrService,
    router: Router) { }

  /**
 * The new case of use to be created.
 * It is a detail because of the comment on the case of use.
 */
  casodeusoDetail: CasodeusoDetail;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an case of use.
    */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user created a new case of use.
   */
  @Output() create = new EventEmitter();

  /**
 * Creates a new case of use. 
 */
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

/**
* This function will initialize the component
*/
  ngOnInit() {
    this.casodeusoDetail = new CasodeusoDetail();
  }

}
