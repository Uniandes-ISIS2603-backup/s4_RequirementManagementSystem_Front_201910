import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CondicionService } from '../condicion.service';
import { ToastrService } from 'ngx-toastr';
import { CondicionDetail } from '../condicion-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-condicion-update',
  templateUrl: './condicion-update.component.html',
  styleUrls: ['./condicion-update.component.css']
})
/**
 * Component that updates a specific condition
 */
export class CondicionUpdateComponent implements OnInit {

  /**
  * The component's constructor
  * @param condicionService The condition´s service
  * @param toastrService The toastr to show messages to the user 
  */
  constructor(private condicionService: CondicionService,
    private toastrService: ToastrService, private route: ActivatedRoute) { }

   /**
  * The output which tells the parent component
  * that the user no longer wants to create a condition
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new condition
  */
  @Output() update = new EventEmitter();

  /**
  * The condition to edit
  */
  condicionDetail: CondicionDetail;

  /**
  * Retrieves the information of the condition
  */
  getCondicion(id: number): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    const condicionId = +this.route.snapshot.paramMap.get('condicionId');
    this.condicionService.getCondicionesDetail(proyectoId, objetivoId, requisitoId, casoDeUsoId, condicionId)
        .subscribe(condicion => {
            this.condicionDetail = condicion;
        });
  }

  /**
  * Updates the condition's information
  */
  editCondicion(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    const condicionId = +this.route.snapshot.paramMap.get('condicionId');
    this.condicionService.updateCondicion(proyectoId, objetivoId, requisitoId, casoDeUsoId, condicionId, this.condicionDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The condition information was updated", "Condition edition");
        });
        console.log(this.condicionDetail);
  }

  /**
   * Informs the parent component that the user no longer wants to update the condition.
   */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
  * The function which initializes the component
  */
  ngOnInit() {
    this.condicionDetail= new CondicionDetail();

  }

  /**
  * The function which is called every time the user chooses to edit a different condition
  */
  ngOnChanges() {
    this.ngOnInit();
  }

}
