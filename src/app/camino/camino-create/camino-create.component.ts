import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camino } from '../../camino/camino';
import { CaminoService } from '../../camino/camino.service';
import { ToastrService } from 'ngx-toastr';

/**
 * Component that creates a new camino
 */
@Component({
  selector: 'app-camino-create',
  templateUrl: './camino-create.component.html',
  styleUrls: ['./camino-create.component.css']
})
export class CaminoCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param caminoService The camino's service provider
    * @param toastrService The toastr to show messages to the user 
    * @param router The router of the component
    */
  constructor(private caminoService: CaminoService, private toastrService:ToastrService, private route: ActivatedRoute) { }


  /**
 * The new camino to be created.
 * It is a detail because of the comment on the camino.
 */
camino:Camino;

/**
  * The output which tells the parent component
  * that the user no longer wants to create an camino.
  */
@Output() cancel = new EventEmitter();

/**
 * The output which tells the parent component
 * that the user created a new camino.
 */
@Output() create = new EventEmitter();

/**
* Creates a new camino. 
*/
createCamino(): Camino {
  const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
  const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
  const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
  const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
  console.log(this.camino);
 this.caminoService.createCamino(proyectoId, objetivoId, requisitoId, casoDeUsoId, this.camino)
     .subscribe((camino) => {
         this.camino = camino;
         this.create.emit();
         this.toastrService.success("The change was created", "Change creation");
     }, err => {
         this.toastrService.error(err, "Error");
     });
 return this.camino;
}

/**
* Informs the parent component that the user no longer wants to create a camino.
*/
cancelCreation(): void {
  this.cancel.emit();
}

/**
* This function will initialize the component
*/
  ngOnInit() {
    this.camino = new Camino();

  }

}
