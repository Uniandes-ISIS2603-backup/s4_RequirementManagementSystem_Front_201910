import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CasodeusoService } from '../casodeuso.service';
import { ToastrService } from 'ngx-toastr';
import { CasodeusoDetail } from '../casodeuso-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casodeuso-update',
  templateUrl: './casodeuso-update.component.html',
  styleUrls: ['./casodeuso-update.component.css']
})
/**
 * Component that updates a specific case of use
 */
export class CasodeusoUpdateComponent implements OnInit {

  /**
  * The component's constructor
  * @param casodeusoService The cases´s service
  * @param toastrService The toastr to show messages to the user 
  */
  constructor(private casodeusoService: CasodeusoService,
    private toastrService: ToastrService, private route: ActivatedRoute) { }


  /**
  * The output which tells the parent component
  * that the user no longer wants to create a case of use
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new case of use
  */
  @Output() update = new EventEmitter();

  /**
  * The case of use to edit
  */
  casodeusoDetail: CasodeusoDetail;

  /**
  * Retrieves the information of the case of use
  */
  getCasodeuso(id: number): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    this.casodeusoService.getCasosdeusoDetail(proyectoId, objetivoId, requisitoId, casoDeUsoId)
        .subscribe(casodeuso => {
            this.casodeusoDetail = casodeuso;
        });
  }

  /**
  * Updates the case's information
  */
  editCasodeuso(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    this.casodeusoService.updateCasodeuso(proyectoId, objetivoId, requisitoId, casoDeUsoId, this.casodeusoDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The case of use information was updated", "Case of use edition");
        });
        console.log(this.casodeusoDetail);
  }

  /**
  * Informs the parent component that the user no longer wants to update the case of use.
  */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
  * The function which initializes the component
  */
  ngOnInit() {
    this.casodeusoDetail= new CasodeusoDetail();
  }

  /**
  * The function which is called every time the user chooses to edit a different case of use
  */
  ngOnChanges() {
    this.ngOnInit();
  }

}
