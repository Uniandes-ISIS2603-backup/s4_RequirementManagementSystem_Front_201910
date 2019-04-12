import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CondicionService } from '../condicion.service';
import { ToastrService } from 'ngx-toastr';
import { CondicionDetail } from '../condicion-detail';

@Component({
  selector: 'app-condicion-update',
  templateUrl: './condicion-update.component.html',
  styleUrls: ['./condicion-update.component.css']
})
export class CondicionUpdateComponent implements OnInit {

  constructor(private condicionService: CondicionService,
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

  condicionDetail: CondicionDetail;

  getCondicion(id: number): void {
    this.condicionService.getCondicionesDetail(id)
        .subscribe(condicion => {
            this.condicionDetail = condicion;
        });
  }

  editCondicion(): void {
    this.condicionService.updateCondicion(this.condicionDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The condition information was updated", "Condition edition");
        });
        console.log(this.condicionDetail);
  }

  /**
   * Informs the parent component that the user no longer wants to update the approbation.
   */
  cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.condicionDetail= new CondicionDetail();

  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
