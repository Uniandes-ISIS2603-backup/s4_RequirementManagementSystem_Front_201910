import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CasodeusoService } from '../casodeuso.service';
import { ToastrService } from 'ngx-toastr';
import { CasodeusoDetail } from '../casodeuso-detail';

@Component({
  selector: 'app-casodeuso-update',
  templateUrl: './casodeuso-update.component.html',
  styleUrls: ['./casodeuso-update.component.css']
})
export class CasodeusoUpdateComponent implements OnInit {

  constructor(private casodeusoService: CasodeusoService,
    private toastrService: ToastrService) { }


    /**
  * The output which tells the parent component
  * that the user no longer wants to create an approbation
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new approbation
  */
  @Output() update = new EventEmitter();

  casodeusoDetail: CasodeusoDetail;

  getCasodeuso(id: number): void {
    this.casodeusoService.getCasosdeusoDetail(id)
        .subscribe(casodeuso => {
            this.casodeusoDetail = casodeuso;
        });
  }

  editCasodeuso(): void {
    this.casodeusoService.updateCasodeuso(this.casodeusoDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The case of use information was updated", "Case of use edition");
        });
        console.log(this.casodeusoDetail);
  }

  /**
  * Informs the parent component that the user no longer wants to update the approbation.
  */
  cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.casodeusoDetail= new CasodeusoDetail();
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
